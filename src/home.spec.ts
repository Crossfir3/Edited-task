import {
    browser,
    by,
    element
} from 'protractor';
let productPage = require('./page-object/productPage')

describe('Edited shopping bag', () =>  {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        await browser.get('https://shop.mango.com/bg-en/men/t-shirts_c12018147');
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.executeScript('window.localStorage.clear();');
        await browser.sleep(3000);
        await productPage.cookies();
    });

    beforeEach(async() => {
        await browser.sleep(100);
    });

    it('should navigate to the right product', async () => {
        await productPage.selectProduct();
        await browser.sleep(3000);

        expect(await browser.getTitle()).toEqual('Sustainable cotton basic t-shirt - Man | Mango Man Bulgaria');
    });

    it('should check if price info is present', async () => {
        let price = await productPage.priceInfo();

        expect(await price.getText()).toEqual('лв.19.99');
    });

    it('should check if color info is present', async () => {
        let color = await productPage.colorInfo();

        expect(await color.getText()).toEqual('White');
    });

    it('should check if size info is present', async () => {
        await productPage.sizeSelector();
        let size = await productPage.sizes();

        expect(await size.length).toBeGreaterThanOrEqual(1);
        //closing the size menu
        await productPage.sizeSelector();
    });

    it('should add the selected product to shopping cart', async () => {
        await productPage.sizeSelector();
        let size = await productPage.sizes();

        await size[2].click();
        await browser.sleep(300);
        await productPage.addProduct();
        await browser.sleep(300);
        let cartInfo = await productPage.shoppingBagInfo();

        expect(await cartInfo[0].getText()).toContain("T-shirt");
        expect(await cartInfo[1].getText()).toBe("Qty.: 1");
        expect(await cartInfo[2].getText()).toBe("Size: M");
        expect(await cartInfo[3].getText()).toBe("White");
    });
});