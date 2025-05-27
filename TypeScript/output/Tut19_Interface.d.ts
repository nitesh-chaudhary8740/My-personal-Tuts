interface Info {
    name: string;
    age: number;
    college: string;
}
interface teacherInfo extends Info {
    subject: string;
}
declare const student: Info;
declare const teacher: teacherInfo;
