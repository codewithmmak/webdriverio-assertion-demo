describe('toExist', async () => {
    it('verify element exist', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
        const elem = await $('.icon-left.both.text-reset')
        await expect(elem).toExist()
    });
});