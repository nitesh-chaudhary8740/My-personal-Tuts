declare class Product1 {
    pName: string;
    protected pPrice: number;
    private pId;
    inCart: boolean;
    isOrdered: boolean;
    constructor(name: string, price: number, id: number);
    addToCart(): void;
    buyProduct(): string;
}
declare const product2: Product1;
declare class LastestProduct extends Product1 {
    constructor();
    getPrice(): number;
}
declare const childInstance: LastestProduct;
