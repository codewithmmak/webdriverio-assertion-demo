describe('toHaveText', async () => {
    it('verify element to have text', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $(".page-title.h3")
        await expect(elem).toHaveText('Register Account')
    });
});