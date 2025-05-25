"use strict";
//Symbol are use to create unique value, each time symbol will create a new and unique symbol will be created
var sym = Symbol();
var sym1 = Symbol();
console.log(sym == sym1);
console.log(sym === sym1);
const id = Symbol('id');
const nid = id;
const obj = {
    [id]: 'id',
    [nid]: 'nid'
};
console.log(obj[id]);
console.log(obj[nid]);
console.log(obj);
obj[id] = "new id";
obj[nid] = "new nid";
console.log(obj);
console.log(obj[nid]);
console.log(obj[nid]);
