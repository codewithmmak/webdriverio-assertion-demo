describe('toBeRequested', async () => {
    it('verify toBeRequested', async () => {
        const mock = browser.mock('https://play.google.com/log?format=json&hasfast=true&authuser=0');
        await expect(mock).toBeRequested()
    });
});