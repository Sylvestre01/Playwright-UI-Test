import { Page, expect } from "@playwright/test";
import helpers from "../utility/utils";


export class LoginPage {
    private readonly page: Page;
    private readonly loginButton: string;
    private readonly username: string;
    private readonly password: string;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = 'input[data-test="login-button"]';
        this.username = 'input[data-test="username"]';
        this.password = 'input[data-test="password"]';
    }

    async launchURL() {
        await helpers.navigateTo(this.page, "https://www.saucedemo.com/");
    }

    async login(username: string, password: string) {
        await helpers.fill(this.page, this.username, username);
        await helpers.fill(this.page, this.password, password);
        await helpers.click(this.page, this.loginButton);
        expect(await this.page.title()).toEqual('Swag Labs');
    }
}
