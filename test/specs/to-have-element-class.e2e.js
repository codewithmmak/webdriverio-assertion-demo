describe('toHaveElementClass', async () => {
    it('verify element to have class', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("#input-firstname")
        await expect(elem).toHaveElementClass("form-control")
    });
});