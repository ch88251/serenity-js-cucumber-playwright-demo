import { Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement, Select } from '@serenity-js/web';

export const CompleteRegistration = {
    withPassword: (password: string) =>
        Task.where(`#actor completes account registration`,
            Enter.theValue(password).into(AccountForm.passwordField()),
            Select.value('1').from(AccountForm.dobDaySelect()),
            Select.value('1').from(AccountForm.dobMonthSelect()),
            Select.value('2000').from(AccountForm.dobYearSelect()),
            Enter.theValue('Alice').into(AccountForm.firstNameField()),
            Enter.theValue('Smith').into(AccountForm.lastNameField()),
            Enter.theValue('123 Main Street').into(AccountForm.addressField()),
            Select.value('United States').from(AccountForm.countrySelect()),
            Enter.theValue('California').into(AccountForm.stateField()),
            Enter.theValue('Los Angeles').into(AccountForm.cityField()),
            Enter.theValue('90001').into(AccountForm.zipcodeField()),
            Enter.theValue('5551234567').into(AccountForm.mobileNumberField()),
            Click.on(AccountForm.createAccountButton()),
        ),
}

const AccountForm = {
    passwordField: () =>
        PageElement.located(By.css('[data-qa="password"]')).describedAs('password field'),

    dobDaySelect: () =>
        PageElement.located(By.css('[data-qa="days"]')).describedAs('day of birth'),

    dobMonthSelect: () =>
        PageElement.located(By.css('[data-qa="months"]')).describedAs('month of birth'),

    dobYearSelect: () =>
        PageElement.located(By.css('[data-qa="years"]')).describedAs('year of birth'),

    firstNameField: () =>
        PageElement.located(By.css('[data-qa="first_name"]')).describedAs('first name field'),

    lastNameField: () =>
        PageElement.located(By.css('[data-qa="last_name"]')).describedAs('last name field'),

    addressField: () =>
        PageElement.located(By.css('[data-qa="address"]')).describedAs('address field'),

    countrySelect: () =>
        PageElement.located(By.css('[data-qa="country"]')).describedAs('country select'),

    stateField: () =>
        PageElement.located(By.css('[data-qa="state"]')).describedAs('state field'),

    cityField: () =>
        PageElement.located(By.css('[data-qa="city"]')).describedAs('city field'),

    zipcodeField: () =>
        PageElement.located(By.css('[data-qa="zipcode"]')).describedAs('zipcode field'),

    mobileNumberField: () =>
        PageElement.located(By.css('[data-qa="mobile_number"]')).describedAs('mobile number field'),

    createAccountButton: () =>
        PageElement.located(By.css('[data-qa="create-account"]')).describedAs('create account button'),
}
