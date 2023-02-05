describe('toHaveValueContaining', async () => {
    it('verify element to have value containing', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
        const elem = await $("#printMe")
        await expect(elem).toHaveValueContaining('Print')
    });
});