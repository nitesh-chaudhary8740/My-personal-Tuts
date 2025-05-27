declare var empData: {
    name: string;
    email: string;
};
type myType1 = {
    name: string;
    email: string;
};
type myType2 = {
    age: number;
};
declare const newObj: myType1 & myType2;
