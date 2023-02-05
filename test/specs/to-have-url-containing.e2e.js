describe('toHaveUrlContaining', async () => {
    it('verify url contain right value i.e ecommerce', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
        await expect(browser).toHaveUrlContaining('ecommerce');
    });
});