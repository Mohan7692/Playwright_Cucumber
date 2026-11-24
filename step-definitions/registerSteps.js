const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

let email;

Given('User launches the browser', async function () {

});

Given('User navigates to Automation Exercise website', async function () {

    await this.page.goto('https://automationexercise.com');

});

Then('Home page should be visible', async function () {

    await expect(this.page).toHaveTitle(/Automation Exercise/);

});

When('User clicks Signup Login button', async function () {

    await this.page.locator('a[href="/login"]').click();

});

Then('New User Signup should be visible', async function () {

    await expect(
        this.page.getByText('New User Signup!')
    ).toBeVisible();

});

When('User enters name and email', async function () {

    email = `playwright${Date.now()}@gmail.com`;

    await this.page.locator('[data-qa="signup-name"]')
        .fill('Mohan');

    await this.page.locator('[data-qa="signup-email"]')
        .fill(email);

});

When('User clicks Signup button', async function () {

    await this.page.locator('[data-qa="signup-button"]').click();

});

Then('Enter Account Information should be visible', async function () {

    await expect(
        this.page.getByText('Enter Account Information')
    ).toBeVisible();

});

When('User fills account information', async function () {

    await this.page.locator('#id_gender1').check();

    await this.page.locator('#password')
        .fill('Password123');

    await this.page.selectOption('#days', '10');
    await this.page.selectOption('#months', '5');
    await this.page.selectOption('#years', '1995');

    await this.page.locator('#newsletter').check();

    await this.page.locator('#optin').check();
});

When('User fills address details', async function () {

    await this.page.locator('#first_name').fill('Mohan');

    await this.page.locator('#last_name').fill('Kumar');

    await this.page.locator('#company')
        .fill('ABC Technologies');

    await this.page.locator('#address1')
        .fill('Velachery');

    await this.page.locator('#address2')
        .fill('Near Railway Station');

    await this.page.selectOption('#country', 'India');

    await this.page.locator('#state')
        .fill('Tamil Nadu');

    await this.page.locator('#city')
        .fill('Chennai');

    await this.page.locator('#zipcode')
        .fill('600042');

    await this.page.locator('#mobile_number')
        .fill('9876543210');

});

When('User clicks Create Account button', async function () {

    await this.page.locator('[data-qa="create-account"]').click();

});

Then('Account Created message should be displayed', async function () {

    await expect(
        this.page.getByRole('heading', {
            name: 'Account Created!'
        })
    ).toBeVisible();

});

When('User clicks Continue button', async function () {

    await this.page.locator('[data-qa="continue-button"]').click();

});

Then('Logged in as username should be displayed', async function () {

    await expect(
        this.page.locator('text=Logged in as')
    ).toBeVisible();

});

When('User deletes the account', async function () {

    await this.page.locator(
        'a[href="/delete_account"]'
    ).click();

});

Then('Account Deleted message should be displayed', async function () {

    await expect(
        this.page.getByText('Account Deleted!')
    ).toBeVisible();

});