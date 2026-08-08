import { Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement } from '@serenity-js/web';


export const Authenticate = {
    using: (username: string, password: string) =>
        Task.where(`#actor logs in as ${ username }`,
            Click.on(LandingPage.loginButton()),
            Enter.theValue(username).into(LoginForm.usernameField()),
            Enter.theValue(password).into(LoginForm.passwordField()),
            Click.on(LoginForm.signInButton()),
        ),
}


const LandingPage = {
    loginButton: () =>
        PageElement.located(By.css('button.btn--login')).describedAs('login button'),
}


const LoginForm = {
    usernameField: () =>
        PageElement.located(By.id('username')).describedAs('username field'),

    passwordField: () =>
        PageElement.located(By.id('password')).describedAs('password field'),

    signInButton: () =>
        PageElement.located(By.id('kc-login')).describedAs('sign in button'),
}
