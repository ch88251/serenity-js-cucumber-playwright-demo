import { Ensure, equals, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { By, isVisible, Navigate, PageElement, Text } from '@serenity-js/web';

export class VerifySignUp {
    static accountCreated = () =>
        Task.where(`#actor verifies that account has been created`,
            Ensure.that(ConfirmationPage.accountCreatedHeading(), isVisible()),
            Ensure.that(Text.of(ConfirmationPage.accountCreatedHeading()), equals('ACCOUNT CREATED!')),
        )

    static loggedInAs = (name: string) =>
        Task.where(`#actor verifies they are logged in as "${ name }"`,
            Navigate.to('https://automationexercise.com/'),
            Ensure.that(Text.of(NavBar.loggedInUsername()), includes(name)),
        )
}

const ConfirmationPage = {
    accountCreatedHeading: () =>
        PageElement.located(By.css('[data-qa="account-created"]')).describedAs('"ACCOUNT CREATED!" heading'),
}

const NavBar = {
    loggedInUsername: () =>
        PageElement.located(By.css('a:has(i.fa-user) b')).describedAs('logged in username'),
}
