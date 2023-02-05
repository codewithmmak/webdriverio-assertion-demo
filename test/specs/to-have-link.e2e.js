describe('toHaveLink', async () => {
    it('verify element to have link', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("div[id='content'] p a")
        await expect(elem).toHaveLink('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
    });
});