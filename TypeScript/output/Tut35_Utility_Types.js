"use strict";
//In tyypescript . Utility types are built-in types that help
//transform or manipulate other types in convenient way.
let UserData35 = {
    id: 234,
    // newProperty:'value'//not allowed
};
function getData35(data) {
    console.log(data?.id);
    console.log(data?.name);
}
getData35({ id: 234, name: '454' });
function getData35_1(data) {
    console.log(data?.id);
    console.log(data?.name);
}
getData35_1({ id: 234, name: '454', location: 'rewa', contact: '34543' }); //all field is need to be pass
const myData35 = {
    name: 'nik',
    location: 'rewa'
};
