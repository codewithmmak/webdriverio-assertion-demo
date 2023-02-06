describe('toBeSelected', async () => {
    it('verify element to be selected', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/checkbox-demo');
        const elem = await $("#isAgeSelected")
        elem.click();
        await expect(elem).toBeSelected()
    });
});