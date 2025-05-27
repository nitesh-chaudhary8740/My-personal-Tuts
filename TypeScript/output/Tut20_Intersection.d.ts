declare var PersonDataA: {
    name: string;
};
declare var PersonDataB: {
    age: number;
};
declare var PersonDataC: {
    name: string;
    age: number;
};
type personTA = {
    name: string;
};
type personTB = {
    age: number;
};
type personTC = personTA & personTB;
declare const personDataTA: personTA;
declare const personDataTB: personTB;
declare const personDataTC: personTC;
type unionType = string | number | boolean;
declare let x: unionType;
