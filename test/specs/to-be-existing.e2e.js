describe('toBeExisting', async () => {
    it('verify element is existing', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
        const elem = await $('.icon-left.both.text-reset')
        await expect(elem).toBeExisting()
    });
});