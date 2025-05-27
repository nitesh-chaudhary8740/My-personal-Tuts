declare let userData20: number | string | boolean;
declare function checkDataType(data: string | number): void;
declare class Product31 {
}
declare class Order31 {
}
declare const p1: Product31;
declare const o1: Order31;
declare function checkDetails(data: Product31 | Order31): void;
interface userDataInterFace31 {
    name: string;
    city: string;
}
interface userInfoInterface31 {
    id: number;
    email: string;
}
declare const userData31: userInfoInterface31 | userDataInterFace31;
declare const userInfo31: userInfoInterface31 | userDataInterFace31;
declare function checkUserData31(data: userDataInterFace31 | userInfoInterface31): void;
