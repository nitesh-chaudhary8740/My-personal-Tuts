let isProfileDisplayOn:boolean = false;
let buttonText:string = 'show info'
function getInfo(){
    // console.log('get logged')
    const nameInput = document.getElementById('username') as HTMLInputElement
    //as HTMLInputElement is called type assertion,
    //which is use to tell TS what kind of element will be returning..
    //(<div></div>,<a></a>,or <input></input>....etc)
    const userName:string = nameInput.value;
    const emailInput = document.getElementById('email') as HTMLInputElement
    const userEmail:string = emailInput.value;
    const ageInput = document.getElementById('age') as HTMLInputElement
    const userAge:number= Number(ageInput.value);
    const btnElemetn = document.getElementById('btn');
    if(!isProfileDisplayOn){
         console.log('on ',buttonText)
        displayData(userName,userEmail,userAge);
        buttonText='hide info'
        btnElemetn?btnElemetn.innerText = buttonText:console.log('element not found');        
        isProfileDisplayOn = true;
    }
    else{
        buttonText='show info'
        console.log('off ',buttonText)
        document.getElementById('container')?.remove();
        btnElemetn?btnElemetn.innerText = buttonText:console.log('element not found');   
        isProfileDisplayOn = false;
    }
}
function displayData (username:string,email:string,age:number){
    const containerDiv = document.createElement('div');
    containerDiv.setAttribute('id','container');
    containerDiv.innerHTML = `
      username:  ${username} <br>
      email:  ${email } <br>
      age:  ${ age} <br>
    `
    document.body.appendChild(containerDiv)
}