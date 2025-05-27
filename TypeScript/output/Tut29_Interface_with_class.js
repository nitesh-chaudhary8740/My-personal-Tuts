"use strict";
class CollegeData {
    name;
    constructor(name) {
        this.name = name;
    }
    displayTeachersName() {
        console.log('teacher1, teacher2, teacher3');
    }
    getStudentsList() {
        return ['student1', 'student2', 'student3'];
    }
}
const college1 = new CollegeData('IIT Delhi');
college1.displayTeachersName();
console.log(college1.getStudentsList());
