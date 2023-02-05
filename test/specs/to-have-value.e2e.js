describe('toHaveValue', async () => {
    it('verify element to have value', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
        const elem = await $("#printMe")
        await expect(elem).toHaveValue('Print First')
    });
});