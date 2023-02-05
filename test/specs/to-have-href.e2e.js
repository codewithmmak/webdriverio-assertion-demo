describe('toHaveHref', async () => {
    it('verify element to have href', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("div[id='content'] p a")
        await expect(elem).toHaveHref('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    });
});