import { test } from "../Fixtures/fixtures";
import {describe} from "node:test";

describe("Items sorting test", () => {

    test.beforeEach("Go to https://www.saucedemo.com/ and login " , async ({ loginPage }) => {
        await loginPage.launchURL();
        await loginPage.login("standard_user", "secret_sauce");
    });

    test("1. Verify that the items are sorted by Name ( A -> Z )", async ({ itemsPage }) => {
        await itemsPage.verifyItemsSortedByNameAsc();
    })

    test("2. Change the sorting to Name ( Z -> A)", async ({ itemsPage }) => {
        await itemsPage.sortItemsByNameDesc();
    })
    test("3. Verify that the items are sorted correctly", async ({ itemsPage }) => {
        await itemsPage.verifyItemsSortedByNameDesc();
    });
});
