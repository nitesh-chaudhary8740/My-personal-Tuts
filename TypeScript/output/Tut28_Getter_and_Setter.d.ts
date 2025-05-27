declare class EmpInfo {
    _name: string;
    _email: string;
    constructor(name: string);
    get name(): string;
    get email(): string;
    set email(email: string);
}
declare const emp1: EmpInfo;
