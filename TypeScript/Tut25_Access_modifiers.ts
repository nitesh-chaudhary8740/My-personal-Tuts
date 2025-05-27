//use to control access of class property and methods
//by default public
//public - can be accessed anywhere
//protected -  in class and in child classes
//private -   only inside that class
//what is class
//
class Product1 {
    public pName: string;
    protected pPrice: number;
    private pId: number;
    inCart = false;
    isOrdered = false;
    constructor(name: string, price: number, id: number) {
        this.pName = name;
        this.pPrice = price;
        this.pId = id;
    }
    addToCart(): void {
        this.inCart = true;
    }
    buyProduct(): string {
        if (this.inCart) {
            return `product: ${this.pName} price:${this.pPrice}`
        }
        else {
            return `no product in cart!`
        }
    }
}
const product2 = new Product1('Lenevo', 40999, 102);
console.log(product2.buyProduct())
product2.addToCart()
console.log(product2.buyProduct())
console.log(product2.pName)
// console.log(product2.pPrice)//protected not accessiable outside of class and child class
// console.log(product2.pId)//private cannot be accessed outside of class itself
class LastestProduct extends Product1{
    constructor(){
        super('Xbox',50000,123);
    }
    getPrice(): number{
        return this.pPrice //protected properties can be accessed in child claass
        // return this.pId//private cannot
    }
}
const childInstance = new LastestProduct();
console.log(childInstance.getPrice())//accessing protected element
