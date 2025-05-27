"use strict";
var studentData = 'nik'; //| (pipe) union type
studentData = 12;
function fruits() {
    let noOfFruits = 1;
    if (noOfFruits > 1) {
        return ['Mango', 'Apple', 'Banana'];
    }
    else {
        return 'mango';
    }
}
//or
function fruits1() {
    let noOfFruits = 1;
    if (noOfFruits > 1) {
        return ['Mango', 'Apple', 'Banana', 5]; //any kind of data
    }
    else {
        return 'mango';
    }
}
