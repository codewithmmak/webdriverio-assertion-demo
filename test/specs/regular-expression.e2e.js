describe('toHaveText with regular expression', async () => {
    it('verify element to have text with regular expression', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $(".page-title.h3")
        await expect(elem).toHaveText(/register/i)
    });
});