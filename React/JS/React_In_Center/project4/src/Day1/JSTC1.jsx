import {B} from "./JSTC2"
export function A(){
    const name = "Nitesh";
    const surname = "Chaudhary";
    const age = 24;
    return (
        <div>

    <div>Name is: {name}</div>
    <div>Surname is: {surname}</div>
    <div>Age is: {age}</div>
    <B data1={name} data2={surname} data3={age}/>
        </div>
    )
}