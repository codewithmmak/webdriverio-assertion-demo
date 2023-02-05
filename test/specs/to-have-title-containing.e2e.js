describe('toHaveTitleContaining', async () => {
    it('verify website title contains a value', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
        await expect(browser).toHaveTitleContaining('Store');
    });
});