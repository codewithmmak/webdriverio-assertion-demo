describe('toBeDisplayed', async () => {
    it('verify element is displayed', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/');
        const elem = await $('.icon-left.both.text-reset')
        await expect(elem).toBeDisplayed()
    });
});