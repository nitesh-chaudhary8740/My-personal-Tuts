if(false){
const  value = 0;
console.log(value)
}else{

    // console.log(value)
}
// falsy values= 0, -0, 0n(BigInt), "", null, undefined, NaN
//considerable thruthy values = " ", "0", "false", [], {}, function(){}
// false == '' is true
// false == 0 is true
// 0 == '' is true
// Example 1: `null` or `undefined` (where both operators behave similarly)
let name = null;
let defaultName = name ?? 'Guest'; // defaultName is 'Guest'
let defaultName2 = name || 'Guest'; // defaultName2 is 'Guest'

let age = undefined;
let defaultAge = age ?? 18;       // defaultAge is 18
let defaultAge2 = age || 18;      // defaultAge2 is 18

// Example 2: Other falsy values (where `??` is different and often preferred)
let userCount = 0; // A valid number, but falsy!
let displayCount = userCount ?? 1; // displayCount is 0 (?? keeps 0)
let displayCount2 = userCount || 1; // displayCount2 is 1 (|| replaces 0 with 1)

let userName = ''; // An empty string, but perhaps valid in some contexts
let displayName = userName ?? 'Anonymous'; // displayName is '' (?? keeps '')
let displayName2 = userName || 'Anonymous'; // displayName2 is 'Anonymous' (|| replaces '' with 'Anonymous')

let isActive = false; // A valid boolean value, but falsy!
let status = isActive ?? true; // status is false (?? keeps false)
let status2 = isActive || true; // status2 is true (|| replaces false with true)
let result1 = 0 || false; // 0 is falsy, so it returns 'false'
console.log(result1); // Output: false //right side is default value so it go with default value if left is falsy
console.log(null ?? undefined)//null coalesing operator
console.log(undefined ?? null)//
console.log(false ?? null)//
console.log(false ?? undefined)//
//it can be use as
//let value = null ?? func1() return value??func()2 return value
//if any not null value get encountered it will we get stored to the value variable


