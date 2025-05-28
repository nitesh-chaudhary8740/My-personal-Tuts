"use strict";
function upDatedSum(target, key, descriptor) {
    descriptor.value = function sum(x, y) {
        return `${x} + ${y} = ${x + y}`;
    };
}
class CustomMaths39 {
    // @upDatedSum 
    sum(x, y) {
        return `${x + y}`;
    }
}
const obj39 = new CustomMaths39();
console.log(obj39.sum(3, 4));
