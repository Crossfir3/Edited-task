import { browser, element, by, ElementFinder } from "protractor"

let productPage = function () {

    //accept cookies
    let cookiesAccept = element(by.id('onetrust-accept-btn-handler'));

    this.cookies = async () => {
        await cookiesAccept.click();
    }
    //product page
    let product1 =  element(by.xpath("/html/body/div[4]/div[2]/form/div[1]/div/div/div[1]/div/div[3]/div[1]/div[1]/div/ul/li[1]/a"));
    
    this.getProduct =  async (url) =>  {
        await browser.get(url);
    }
    this.selectProduct =  async () => {
        await product1.click();
    }
    //product details page
    let productPrice = element(by.xpath("/html/body/div[4]/div/form/div[2]/div[1]/main/div/div[3]/div[1]/div[2]/span[2]"));
    let sizeSelector = element(by.id("sizeSelector"));
    let sizeAvailability = element.all(by.xpath("/html/body/div[4]/div/form/div[2]/div[1]/main/div/div[3]/div[3]/form/div[2]/div/div/span"))
    let productColors = element(by.xpath(`/html/body/div[4]/div/form/div[2]/div[1]/main/div/div[3]/div[2]`));
    let productColor = productColors.element(by.css("div:nth-child(2)"));
    let addProduct = element(by.xpath(`/html/body/div[4]/div/form/div[2]/div[1]/main/div/div[3]/div[3]/form/div[3]/button`));

    this.priceInfo = async () => {
        return await productPrice;
    }
    this.sizeSelector = async () => {
        await sizeSelector.click();
        await browser.sleep(100);
    }
    this.sizes = async () => {  
        return await sizeAvailability;
    }
    this.colorInfo = async () => {
        return await productColor;
    }
    this.addProduct = async () => {
        await addProduct.click();
    }
    //shopping bag
    let shoppingBagInfo = element.all(by.xpath("/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div/div[2]/div[1]/div[1]/div/p"));
    this.shoppingBagInfo = async () => {
        return await shoppingBagInfo;
    }
    this.shoppingBagSize = async () => {
        return await shoppingBagInfo[2];
    }
    this.shoppingBagColor = async () => {
        return await shoppingBagInfo[3];
    }
} 
module.exports = new productPage();
