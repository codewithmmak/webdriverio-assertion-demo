describe('toHaveId', async () => {
    it('verify element to have id', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("//input[@id='input-firstname']")
        await expect(elem).toHaveId('input-firstname')
    });
});