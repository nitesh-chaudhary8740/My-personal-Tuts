"use strict";
console.log(Number.MAX_SAFE_INTEGER); //bigint use after this
console.log(Number.MIN_SAFE_INTEGER);
var value = BigInt(Number.MAX_SAFE_INTEGER) + 999n;
