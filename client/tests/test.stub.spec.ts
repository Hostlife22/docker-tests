import { test, expect } from "@playwright/test";

test.describe("TEST PLAYWRIGHT", () => {
  test("test", async ({ page }) => {
    await page.goto("http://localhost:3000");
    // await page.route(/localhost:8080\/api\/100/, (route) => {
    //   route.fulfill({
    //     status: 200,
    //     contentType: "text/plain",
    //     body: JSON.stringify({ title: "Title" }),
    //   });
    // });
    await expect(page.getByText("Welcome Egor")).toBeVisible({
      timeout: 60000,
    });
  });
});
