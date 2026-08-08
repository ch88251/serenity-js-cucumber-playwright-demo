import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

/**
 * A Task that allows an actor to navigate to the Staff page
 */
export const NavigateToStaffPage = () =>
    Task.where(`#actor navigates to the Staff page`,
        Click.on(NavBar.staffLink()),
    );

/**
 * Define the page elements for the navigation bar
 */
const NavBar = {
    staffLink: () =>
        PageElement.located(By.css('nav a[href="/staff"]')).describedAs('Staff navigation link'),
}
