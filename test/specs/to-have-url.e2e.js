describe('toHaveURL', async () => {
    it('verify user is directed to right url', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
        await expect(browser).toHaveUrl('https://ecommerce-playground.lambdatest.io/');
    });
});