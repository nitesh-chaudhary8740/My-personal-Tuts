export  function A1 (){
    const x = 9;
    if(x===9){
        return(<F2/>)
    }
    else{
        return(<F3/>)
    }
}
function F2(){
    return (<div>
        select cites in MP 
        <select name="" id="">
            <option value="Rewa">Rewa</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            <option value="Satna">Satna</option>
        </select>
    </div>)
    
}
function F3(){
    return (<div>
        select cites in World
        <select name="" id="">
            <option value="Delhi">Delhi</option>
            <option value="NewYork">NewYork</option>
            <option value="Banglore">Banglore</option>
            <option value="Mumbai">Mumbai</option>
        </select>
    </div>)
}