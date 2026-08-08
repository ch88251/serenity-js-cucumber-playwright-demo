import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';

import { AddStaffMember, NavigateToStaffPage, VerifyStaffMember } from '../../test/staff';

Given('{pronoun} navigates to the Staff page', async (actor: Actor) =>
    actor.attemptsTo(
        NavigateToStaffPage(),
    )
);

When('{pronoun} adds a new staff member with the following details:', async (actor: Actor, details: DataTable) => {
    const [ staffMember ] = details.hashes();
    return actor.attemptsTo(
        AddStaffMember.withDetails({
            firstName: staffMember['First Name'],
            lastName: staffMember['Last Name'],
            email: staffMember['Email'],
            phoneNumber: staffMember['Phone Number'],
            role: staffMember['Role'],
        }),
    );
});

/**
 * The <field> placeholder in the Examples table isn't quoted, so {string} won't match it
 * and field names like "phone number" are more than one word, so a RegExp is needed here.
 */
When(/.* attempts to add a new staff member without providing a (.*)/, async (field: string) =>
    actorInTheSpotlight().attemptsTo(
        AddStaffMember.withoutProviding(field),
    )
);

Then('{pronoun} should see {string} listed as a member of staff', async (actor: Actor, fullName: string) =>
    actor.attemptsTo(
        VerifyStaffMember.isListedAsAMemberOfStaff(fullName),
    )
);

Then('the staff member should not be added', async () =>
    actorInTheSpotlight().attemptsTo(
        VerifyStaffMember.wasNotAdded(),
    )
);
