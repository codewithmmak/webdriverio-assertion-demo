describe('toHaveLinkContaining', async () => {
    it('verify element to have link containing value', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("div[id='content'] p a")
        await expect(elem).toHaveLinkContaining('route=account/login')
    });
});