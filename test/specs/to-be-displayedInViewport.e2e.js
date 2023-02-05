describe('toBeDisplayedInViewport', async () => {
    it('verify element to be displayed in viewport', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("#input-firstname")
        await expect(elem).toBeDisplayedInViewport()
    });
});