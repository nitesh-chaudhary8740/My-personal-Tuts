interface CollegeDataType{
    name:string;
    displayTeachersName():void;
    getStudentsList():string[];
}
class CollegeData implements CollegeDataType{ //Interface forces the structure of class where it is implimented
    name:string;
    constructor(name:string){
        this.name = name
    }
    displayTeachersName(): void {
        console.log('teacher1, teacher2, teacher3')
    }
    getStudentsList(): string[] {
        return ['student1','student2','student3']
    }
}
const college1 = new CollegeData('IIT Delhi')
college1.displayTeachersName()
console.log(college1.getStudentsList())