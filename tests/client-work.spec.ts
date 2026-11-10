import { test, expect } from '@playwright/test';

test('navigate from Services to Client Work', async ({ page }) => {
  await test.step('Open the Services page from the header', async () => {
    await page.goto('https://www.epam.com/');

    // The page has more than one Services link; the last exact match is the
    // header link verified to navigate to the Services page.
    await page.getByRole('link', { name: 'Services', exact: true }).last().click();

    await expect(page).toHaveURL(/\/services$/);
  });

  await test.step('Open Explore Our Client Work', async () => {
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page).toHaveURL(/\/services\/client-work$/);
  });

  await test.step('Verify the Client Work heading is visible', async () => {
    await expect(
      page.getByRole('heading', { name: 'Client Work', exact: true }),
    ).toBeVisible();
  });
});
