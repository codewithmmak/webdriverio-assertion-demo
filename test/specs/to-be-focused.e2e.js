describe('toBeFocused', async () => {
    it('verify element is existing', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $('#input-lastname')
        await elem.click()
        await expect(elem).toBeFocused()
    });
});