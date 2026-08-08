import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { By, isVisible, PageElement, Text } from '@serenity-js/web';

/**
 * VerifyAuthentication aggregates several tasks to make them easier to find:
 * - VerifyAuthentication.succeeded()
 * - VerifyAuthentication.failed()
 */
export class VerifyAuthentication {
    static succeeded = () =>
        Task.where(`#actor verifies that authentication has succeeded`,
            Ensure.that(ProfileMenu.profileButton(), isVisible()),
        )

    static failed = () =>
        Task.where(`#actor verifies that authentication has failed`,
            Ensure.that(LoginForm.errorMessage(), isVisible()),
            Ensure.that(Text.of(LoginForm.errorMessage()), includes('Invalid username or password.')),
        )
}

/**
 * A tiny Lean Page Object, representing the profile menu that appears
 * in the carclinic header once the actor has signed in.
 */
const ProfileMenu = {
    profileButton: () =>
        PageElement.located(By.css('button.profile-btn')).describedAs('profile button'),
}

/**
 * A tiny Lean Page Object, representing the error message
 * shown on the Keycloak login form when authentication fails.
 */
const LoginForm = {
    errorMessage: () =>
        PageElement.located(By.id('input-error-username')).describedAs('login error message'),
}
