describe('toHaveElementClassContaining', async () => {
    it('verify element to have class containing', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("#input-firstname")
        await expect(elem).toHaveElementClassContaining("form")
    });
});