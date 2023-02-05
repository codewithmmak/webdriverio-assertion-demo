describe('toBeClickable', async () => {
    it('verify element is clickable', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("input[value='Continue']")
        await expect(elem).toBeClickable()
    });
});