//interface is a way to define the structure of and object and function
interface Info  {
    name:string,
    age:number,
    college:string
}
interface teacherInfo extends Info{
    subject:string
}
const student:Info ={
    name:'nik',
    age:25,
    college:'RGPV'
}
const teacher:teacherInfo = {
    name: 'myteacher',
    age:35,
    college:'RGPV',
    subject:'OS'
}