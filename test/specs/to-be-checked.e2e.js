describe('toBeChecked', async () => {
    it('verify element to be checked', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/checkbox-demo');
        const elem = await $("#isAgeSelected")
        await expect(elem).not.toBeChecked()
        await elem.click()
        await expect(elem).toBeChecked()
    });
});