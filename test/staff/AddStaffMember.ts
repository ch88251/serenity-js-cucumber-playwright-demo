import { Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement } from '@serenity-js/web';

export interface StaffMemberDetails {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;
}

/**
 * The email used when deliberately submitting the "Add Staff" form with a field missing,
 * so VerifyStaffMember.wasNotAdded() has something distinctive to assert the absence of.
 */
export const STAFF_MEMBER_WITH_MISSING_FIELD_EMAIL = 'test.failure@carclinic.com';

const STAFF_MEMBER_WITH_A_FIELD_MISSING: StaffMemberDetails = {
    firstName: 'Test',
    lastName: 'Failure',
    email: STAFF_MEMBER_WITH_MISSING_FIELD_EMAIL,
    phoneNumber: '555-0000',
    role: 'Mechanic',
};

const FIELD_NAME_TO_PROPERTY: Record<string, keyof StaffMemberDetails> = {
    'first name': 'firstName',
    'last name': 'lastName',
    'email': 'email',
    'phone number': 'phoneNumber',
    'role': 'role',
};

export const AddStaffMember = {
    withDetails: (details: StaffMemberDetails) =>
        Task.where(`#actor adds a new staff member`,
            Click.on(StaffPage.addStaffButton()),
            Enter.theValue(details.firstName).into(AddStaffMemberForm.firstNameField()),
            Enter.theValue(details.lastName).into(AddStaffMemberForm.lastNameField()),
            Enter.theValue(details.email).into(AddStaffMemberForm.emailField()),
            Enter.theValue(details.phoneNumber).into(AddStaffMemberForm.phoneNumberField()),
            Enter.theValue(details.role).into(AddStaffMemberForm.roleField()),
            Click.on(AddStaffMemberForm.saveButton()),
        ),

    withoutProviding: (field: string) =>
        AddStaffMember.withDetails({
            ...STAFF_MEMBER_WITH_A_FIELD_MISSING,
            [FIELD_NAME_TO_PROPERTY[field]]: '',
        }),
}

const StaffPage = {
    addStaffButton: () =>
        PageElement.located(By.css('.btn--add')).describedAs('Add Staff button'),
}

const AddStaffMemberForm = {
    firstNameField: () =>
        PageElement.located(By.id('firstName')).describedAs('first name field'),

    lastNameField: () =>
        PageElement.located(By.id('lastName')).describedAs('last name field'),

    emailField: () =>
        PageElement.located(By.id('email')).describedAs('email field'),

    phoneNumberField: () =>
        PageElement.located(By.id('phoneNumber')).describedAs('phone number field'),

    roleField: () =>
        PageElement.located(By.id('role')).describedAs('role field'),

    saveButton: () =>
        PageElement.located(By.css('.btn--save')).describedAs('save button'),
}
