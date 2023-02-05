describe('toHaveTitle', async () => {
    it('verify website title', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
        await expect(browser).toHaveTitle('Your Store');
    });
});