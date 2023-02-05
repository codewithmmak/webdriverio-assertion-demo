describe('toHaveAttributeContaining', async () => {
    it('verify element to have attribute containing value', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("#input-newsletter-no")
        await expect(elem).toHaveAttributeContaining("class", "control")
    });
});