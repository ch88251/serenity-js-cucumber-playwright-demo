import { Given, Then, When } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { CompleteRegistration, SignUp, VerifySignUp } from '../../test/signup';

Given('{actor} is on the Automation Exercise login page', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('https://automationexercise.com/login'),
    )
);

When('{pronoun} sign(s) up with the name {string}', async (actor: Actor, name: string) => {
    const email = `test.${name.toLowerCase().replace(/\s+/g, '.')}+${Date.now()}@example.com`;
    return actor.attemptsTo(
        SignUp.withNameAndEmail(name, email),
    );
});

When('{pronoun} complete(s) the registration', async (actor: Actor) => {
    const password = `Pw!${Date.now()}`;
    return actor.attemptsTo(
        CompleteRegistration.withPassword(password),
    );
});

Then('{pronoun} should see that her account has been created', async (actor: Actor) =>
    actor.attemptsTo(
        VerifySignUp.accountCreated(),
    )
);

Then('{pronoun} should be logged in as {string}', async (actor: Actor, name: string) =>
    actor.attemptsTo(
        VerifySignUp.loggedInAs(name),
    )
);
