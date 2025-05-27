interface CollegeDataType {
    name: string;
    displayTeachersName(): void;
    getStudentsList(): string[];
}
declare class CollegeData implements CollegeDataType {
    name: string;
    constructor(name: string);
    displayTeachersName(): void;
    getStudentsList(): string[];
}
declare const college1: CollegeData;
