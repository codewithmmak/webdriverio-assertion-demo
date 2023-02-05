describe('toHaveElementProperty', async () => {
    it('verify element to have property', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("//fieldset[@id='account']//div[2]//div[1]")
        await expect(elem).toHaveElementProperty('width', 43)
        await expect(elem).not.toHaveElementProperty('height', 0)
    });
});