function calculatePrice(value1,...prices){//rest operator (also known as spread depends on context)
    //here ...prices will store all rest params in an array except value1
    return prices//array returned
}
console.log(calculatePrice(200,343,984))//we can pass params as many we need
const product1 = {
    pname:'DvD',
    price:10
}
function productDetails(product){
    console.log(`Product Name: ${product.pname}\nProduct Price: ${product.price}`)
}
productDetails(product1);