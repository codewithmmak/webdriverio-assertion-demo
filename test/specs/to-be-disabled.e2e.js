describe('toBeDisabled', async () => {
    it('verify element to be disabled', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');
        const elem = await $("#create")
        await expect(elem).toBeDisabled()
        // same as
        await expect(elem).not.toBeEnabled()
    });
});