import { Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement } from '@serenity-js/web';

/**
 * Fills in the "New User Signup!" form on https://automationexercise.com/login
 * and submits it to begin the registration process.
 */
export const SignUp = {
    withNameAndEmail: (name: string, email: string) =>
        Task.where(`#actor signs up with name "${ name }"`,
            Enter.theValue(name).into(SignUpForm.nameField()),
            Enter.theValue(email).into(SignUpForm.emailField()),
            Click.on(SignUpForm.signUpButton()),
        ),
}

const SignUpForm = {
    nameField: () =>
        PageElement.located(By.css('[data-qa="signup-name"]')).describedAs('signup name field'),

    emailField: () =>
        PageElement.located(By.css('[data-qa="signup-email"]')).describedAs('signup email field'),

    passwordField: () =>
        PageElement.located(By.css('[data-qa="password"]')).describedAs('password field'),

    firstNameField: () =>
        PageElement.located(By.css('[data-qa="first_name"]')).describedAs('first name field'),

    lastNameField: () =>
        PageElement.located(By.css('[data-qa="last_name"]')).describedAs('last name field'),
    
    signUpButton: () =>
        PageElement.located(By.css('[data-qa="signup-button"]')).describedAs('signup button'),
}
