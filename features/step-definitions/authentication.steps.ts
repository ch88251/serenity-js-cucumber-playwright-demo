import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { Authenticate, VerifyAuthentication } from '../../test/authentication';

Given('{actor} starts with the main landing page', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/'),
    )
);

When('{pronoun} log(s) in using {string} and {string}', async (actor: Actor, username: string, password: string) =>
    actor.attemptsTo(
        Authenticate.using(username, password),
    )
);

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(/.* should see that authentication has (succeeded|failed)/, async (expectedOutcome: string) =>
    actorInTheSpotlight().attemptsTo(
        VerifyAuthentication[expectedOutcome](),
    )
);
