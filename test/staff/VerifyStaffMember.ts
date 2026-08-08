import { equals, Ensure } from '@serenity-js/assertions';
import { Task, Wait } from '@serenity-js/core';
import { By, isVisible, PageElements } from '@serenity-js/web';

import { STAFF_MEMBER_WITH_MISSING_FIELD_EMAIL } from './AddStaffMember';

/**
 * A Task that allows an actor to verify that a staff member is listed in the staff table
 */
export class VerifyStaffMember {
    static isListedAsAMemberOfStaff = (fullName: string) =>
        Task.where(`#actor verifies that ${ fullName } is listed as a member of staff`,
            // the table re-renders asynchronously after Save is clicked, so poll for the row
            // rather than checking once - see Wait.until vs Ensure.that
            Wait.until(StaffTable.rowListing(fullName), isVisible()),
        )

    static wasNotAdded = () =>
        Task.where(`#actor verifies that the staff member was not added`,
            Ensure.that(StaffTable.rowsContaining(STAFF_MEMBER_WITH_MISSING_FIELD_EMAIL).count(), equals(0)),
        )
}

/**
 * A tiny Lean Page Object, representing the table listing existing members of staff.
 */
const StaffTable = {
    /**
     * Adjacent table cells, e.g. First Name and Last Name, have no whitespace between them
     * in the DOM, so a full name is matched by chaining a `:has-text()` filter per word
     * rather than searching for the exact, space-separated phrase.
     *
     * Uses `.first()` because the underlying demo app has no per-scenario data reset, so
     * re-running a scenario without restarting the app can leave more than one matching row.
     */
    rowListing: (fullName: string) =>
        PageElements.located(By.css(`table.staff-table tbody tr${ wordFilters(fullName) }`))
            .first()
            .describedAs(`staff table row listing "${ fullName }"`),

    rowsContaining: (text: string) =>
        PageElements.located(By.cssContainingText('table.staff-table tbody tr', text))
            .describedAs(`staff table rows containing "${ text }"`),
}

const wordFilters = (text: string) =>
    text.trim().split(/\s+/).map(word => `:has-text("${ word }")`).join('');
