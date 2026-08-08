import { Activity, Check, Duration, Task, Wait } from '@serenity-js/core';
import { By, Click, Enter, isVisible, PageElement } from '@serenity-js/web';


export const Authenticate = {
    using: (username: string, password: string) =>
        Task.where(`#actor logs in as ${ username }`,
            // the app takes a moment to work out the actor's auth state on load, during which
            // neither button below is present yet, so wait for that to settle before deciding
            Wait.upTo(Duration.ofSeconds(15)).until(LandingPage.authControl(), isVisible()),
            // the shared Keycloak dev realm can leave an actor already signed in as someone else,
            // so log them out first to guarantee we end up authenticated as the requested user
            Check.whether(LandingPage.loginButton(), isVisible())
                .andIfSo(...logInActivities(username, password))
                .otherwise(
                    Click.on(LandingPage.logoutButton()),
                    ...logInActivities(username, password),
                ),
        ),
}

const logInActivities = (username: string, password: string): Activity[] => [
    Click.on(LandingPage.loginButton()),
    Enter.theValue(username).into(LoginForm.usernameField()),
    Enter.theValue(password).into(LoginForm.passwordField()),
    Click.on(LoginForm.signInButton()),
]


const LandingPage = {
    loginButton: () =>
        PageElement.located(By.css('button.btn--login')).describedAs('login button'),

    logoutButton: () =>
        PageElement.located(By.css('button.btn--logout')).describedAs('logout button'),

    authControl: () =>
        PageElement.located(By.css('button.btn--login, button.btn--logout')).describedAs('authentication control'),
}


const LoginForm = {
    usernameField: () =>
        PageElement.located(By.id('username')).describedAs('username field'),

    passwordField: () =>
        PageElement.located(By.id('password')).describedAs('password field'),

    signInButton: () =>
        PageElement.located(By.id('kc-login')).describedAs('sign in button'),
}
