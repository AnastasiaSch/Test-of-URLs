// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.kulmbach.de');
});

const LINKS = {
    link1: 'Aktuelle Informationen',
    link2: 'Rathaus',
    link3: 'Wirtschaft',
    link4: 'Tourismus',
    link5: 'Karriere'
};

test.describe('get all the URL of navi', () => {
    test(`get ${LINKS.link1}`, async ({ page }) => {
        await page.getByRole('link', { name: `${LINKS.link1}` }).click()
        await expect(page).toHaveURL(/.*Aktuelles/);
        await expect(page).toHaveURL('https://www.kulmbach.de/xist4c/web/Aktuelles_id_41_.htm');
    });
    
    test(`get ${LINKS.link2}`, async ({ page }) => {
        await page.getByRole('link', { name: `${LINKS.link2}` }).click()
        await expect(page).toHaveURL(/.*Rathaus/);
        await expect(page).toHaveURL('https://www.kulmbach.de/xist4c/web/Rathaus_id_42_.htm');
    });
    
    test(`get ${LINKS.link3}`, async ({ page }) => {
        await page.getByRole('link', { name: `${LINKS.link3}` }).click()
        await expect(page).toHaveURL(/.*Kulmbach-Wirtschaftsfoerderung-Ansprechpartner-Unternehmer/);
        await expect(page).toHaveURL('https://www.kulmbach.de/xist4c/web/Kulmbach-Wirtschaftsfoerderung-Ansprechpartner-Unternehmer_id_44_.htm');
    });

    test(`get ${LINKS.link4}`, async ({ page }) => {
        await page.getByRole('link', { name: `${LINKS.link4}` }).click()
        await expect(page).toHaveURL(/.*Tourismus/);
        await expect(page).toHaveURL('https://www.kulmbach.de/xist4c/web/Tourismus_id_43_.htm');
    });
    
    test(`get ${LINKS.link5}`, async ({ page }) => {
        await page.getByRole('link', { name: `${LINKS.link5}` }).click()
        await expect(page).toHaveURL(/.*index/);
        await expect(page).toHaveURL('https://www.mein-check-in.de/kulmbach/index');
    });
})

