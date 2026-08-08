import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

export const NavigateToStaffPage = () =>
    Task.where(`#actor navigates to the Staff page`,
        Click.on(NavBar.staffLink()),
    );

const NavBar = {
    staffLink: () =>
        PageElement.located(By.css('nav a[href="/staff"]')).describedAs('Staff navigation link'),
}
