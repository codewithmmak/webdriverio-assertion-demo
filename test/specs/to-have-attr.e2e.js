describe('toHaveAttr', async () => {
    it('verify element to have attribute', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("#input-newsletter-no")
        await expect(elem).toHaveAttr("type", "radio")
    });
});