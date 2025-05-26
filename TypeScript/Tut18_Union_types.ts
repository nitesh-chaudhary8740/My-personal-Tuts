var studentData:string|number = 'nik';//| (pipe) union type
studentData=12;
function fruits():string|string[]{//explicit same d-type array
    let noOfFruits = 1;
    if(noOfFruits>1){
        return ['Mango','Apple','Banana']
    }
    else{
        return 'mango'
    }
}
//or
function fruits1():string|object{
    let noOfFruits = 1;
    if(noOfFruits>1){
        return ['Mango','Apple','Banana',5] //any kind of data
    }
    else{
        return 'mango'
    }
}
