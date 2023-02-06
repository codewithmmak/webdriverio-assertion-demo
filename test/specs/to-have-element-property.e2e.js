describe('toHaveElementProperty', async () => {
    it('verify element to have property', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $(".page-title.h3")
        await expect(elem).toHaveElementProperty('tagName', 'H1')
        await expect(elem).not.toHaveElementProperty('tagName', 'H2')
    });
});