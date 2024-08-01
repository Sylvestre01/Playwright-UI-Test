import { Page } from "@playwright/test";

export default class HelperMethods {
    static async navigateTo(page: Page, url: string) {
        try {
            await page.goto(url, { waitUntil: "commit" });
            await page.waitForLoadState("domcontentloaded");
        } catch (error) {
            console.error("Error navigating to the URL: " + url);
            throw error;
        }
    }

    static async click(page: Page, selector: string) {
        try {
            await page.click(selector);
        } catch (error) {
            console.error("Error clicking on the element with selector: " + selector);
            throw error;
        }
    }

    static async fill(page: Page, selector: string, text: string) {
        try {
            await page.fill(selector, text);
        } catch (error) {
            console.error("Error filling the element with selector: " + selector);
            throw error;
        }
    }

    static async selectOption(page: Page, selector: string, value: string) {
        try {
            await page.selectOption(selector, value);
        } catch (error) {
            console.error("Error selecting the option with value: " + value);
            throw error;
        }
    }

    static async verifyURL(page: Page, url: string) {
        try {
            await page.waitForURL(url);
        } catch (error) {
            console.error("Error verifying the URL: " + url);
            throw error;
        }
    }
}