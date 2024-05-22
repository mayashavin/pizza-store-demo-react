/* eslint-disable */
import { test, expect } from '@playwright/experimental-ct-react';
import { SearchBox } from "../src/components/SearchBox";

test("should get the search term from outside", async ({ mount, page }) => {
    const component = await mount(<SearchBox defaultValue="pizza" />, {
        hooksConfig: { routing: true },
    });
    const input = await component.locator("[data-testid=search-input]");
    await expect(input).toHaveValue('pizza');
    await expect(page).toHaveURL('/?search=pizza');
})

test('should update the search term to query params', async ({ mount, page }) => {
    const component = await mount(<SearchBox />, {
        hooksConfig: { routing: true },
    });
    await expect(page.url()).not.toContain("?search");
    const input = await component.locator("[data-testid=search-input]");
    await input.fill("pizza");

    await expect(page.url()).toContain("/?search=pizza");
})

test('should get the search term from url', async ({ mount, page }) => {
    await page.goto("/?search=pizza");
    const component = await mount(<SearchBox />, {
        hooksConfig: { routing: true },
    });

    const input = await component.locator("[data-testid=search-input]");
    await expect(input).toHaveValue('pizza');

})

