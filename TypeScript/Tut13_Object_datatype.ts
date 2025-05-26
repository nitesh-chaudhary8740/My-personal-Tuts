var userData: {//here number of properties are fixed, that means new property can't be added
  name:string,
  age:number,
  city:string,
  add:{
    city:string,
    state:string
  }
}={
    name:'Nik',
    age:25,
    city:'Rewa',
    add:{
        city:'rewa',
        state:'mp'
    }
}
//if number of properties not fixed then
var userData1 :{
    [key:string|symbol]:string|number|undefined|object|null
} ={

}
userData1.ar =[1,3,4];
console.log(userData1.ar)