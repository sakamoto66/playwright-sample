const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});

test("error test", async ({page}) => {
  await page.goto('https://google.co.jp/');

  // Click [aria-label="検索"]
  await page.click('[aria-label="検索"]');

  // Fill [aria-label="検索"]
  await page.fill('[aria-label="検索"]', 'aaaa');

  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.google.co.jp/search?q=aaaa&source=hp&ei=XqrpYM3ZEZamoASL2YWIDQ&iflsig=AINFCbYAAAAAYOm4boC7QH5zIdbpXkdc6qwiWy0aB5Gd&oq=aaaa&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEAQyBAgAEAQyBAgAEAQyBAgAEAQyBAgAEAQyAggAMgIIADICCAA6CggAELEDEIMBEAQ6CAgAELEDEIMBOgUIABCxA1DZKViYLmDHRWgBcAB4AIABWYgBtQKSAQE0mAEAoAEBqgEHZ3dzLXdperABAA&sclient=gws-wiz&ved=0ahUKEwjNgPWe19jxAhUWE4gKHYtsAdEQ4dUDCAk&uact=5' }*/),
    page.press('[aria-label="検索"]', 'Enter')
  ]);

  // Click text=JPRS用語辞典｜AAAAリソースレコード（AAAAレコード）
  await page.click('text=JPRS用語辞典｜AAAAリソースレコード（AAAAレコード）');
  // assert.equal(page.url(), 'https://jprs.jp/glossary/index.php?ID=0162');

  // Click text=ドメイン名に対するIPv6アドレスを指定するリソースレコードです。同じドメイン名に対して複数記述することができます。 例） ns1.example.jp. IN
  await page.click('text=ドメイン名に対するIPv6アドレスを指定するリソースレコードです。同じドメイン名に対して複数記述することができます。 例） ns1.example.jp. IN', {
    button: 'right'
  });
});