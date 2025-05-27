//what is class
//
class Product{
    pName:string;
    pPrice:number;
    pId:number;
    inCart = false;
    isOrdered = false;
    constructor(name:string,price:number,id:number){
        this.pName = name;
        this.pPrice = price;
        this.pId = id;
    }
    addToCart():void{
        this.inCart = true;
    }
    buyProduct():string{
        if(this.inCart){
            return `product: ${this.pName} price:${this.pPrice}`
        }
        else{
            return `no product in cart!`
        }
    }
}
const product1 = new Product('Nokia',36999,101);
console.log(product1.buyProduct())
product1.addToCart()
console.log(product1.buyProduct())