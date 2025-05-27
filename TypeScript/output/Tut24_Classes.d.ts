declare class Product {
    pName: string;
    pPrice: number;
    pId: number;
    inCart: boolean;
    isOrdered: boolean;
    constructor(name: string, price: number, id: number);
    addToCart(): void;
    buyProduct(): string;
}
declare const product1: Product;
