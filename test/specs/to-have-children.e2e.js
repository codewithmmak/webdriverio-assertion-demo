describe('toHaveChildren', async () => {
    it('verify element to have children', async () => {
        await browser.url('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        const elem = await $("(//div[@class='form-group row required'])[2]")
        await expect(elem).toHaveChildren()
        // same as
        await expect(elem).toHaveChildren({ gte: 1 })
        // the list has 2 items
        await expect(elem).toHaveChildren(2)
        // same as 
        await expect(elem).toHaveChildren({ eq: 2 })
    });
});