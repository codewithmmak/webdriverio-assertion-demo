describe('toHaveChildren', async () => {
    it('verify element to have children', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const listItems = await $$("//li[@class='nav-item']")
        // 54 items in the list
        await expect(listItems).toBeElementsArrayOfSize(54)
        await expect(listItems).toBeElementsArrayOfSize({ lte: 54 })
    });
});