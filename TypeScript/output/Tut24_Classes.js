"use strict";
//what is class
//
class Product {
    pName;
    pPrice;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, id) {
        this.pName = name;
        this.pPrice = price;
        this.pId = id;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product: ${this.pName} price:${this.pPrice}`;
        }
        else {
            return `no product in cart!`;
        }
    }
}
const product1 = new Product('Nokia', 36999, 101);
console.log(product1.buyProduct());
product1.addToCart();
console.log(product1.buyProduct());
