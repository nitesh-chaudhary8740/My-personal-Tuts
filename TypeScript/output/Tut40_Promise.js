"use strict";
function test1() {
    console.log('test1');
    setTimeout(() => {
        console.log('settimeout test1');
    }, 2000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolution value');
        }, 2000);
    });
}
test1().then((data) => {
    console.log(data);
    test2();
});
function test2() {
    console.log('test2');
}
test1();
// test2()
