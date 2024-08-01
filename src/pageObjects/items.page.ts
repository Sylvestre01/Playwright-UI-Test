
import { Page, expect } from "@playwright/test";
import helpers from "../utility/utils";

export class ItemsPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async sortItemsByNameAsc() {
        await helpers.selectOption(this.page, '.product_sort_container', 'az');
    }

    async sortItemsByNameDesc() {
        await helpers.selectOption(this.page, '.product_sort_container', 'za');
    }

    async getItemNames(): Promise<string[]> {
        const itemNames = await this.page.$$('.inventory_item_name');
        return await Promise.all(itemNames.map(async item => await item.innerText()));
    }

    async verifyItemsSortedByNameAsc() {
        const names = await this.getItemNames();
        const sortedNames = names.slice().sort();
        expect(names).toEqual(sortedNames);
    }

    async verifyItemsSortedByNameDesc() {
        await this.sortItemsByNameDesc();
        const names = await this.getItemNames();
        const sortedNames = names.slice().sort().reverse();
        expect(names).toEqual(sortedNames);
    }
}
