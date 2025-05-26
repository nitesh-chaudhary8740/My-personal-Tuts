"use strict";
function totalPrice(item, text) {
    let price = 100;
    var item = item;
    console.log(price * item);
    if (text) {
        console.log(text + (price * item));
    }
    else {
        console.log(price * item);
    }
}
totalPrice(50, 'total rate is: '); // passing the text
totalPrice(50); //not passing the text
