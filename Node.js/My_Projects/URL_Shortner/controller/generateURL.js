

export  function generateShortURL(){
    let offset = 0;
    let lengthOfRandomChar = 5;
    const randomChars = [];

    const charArr = [];
    for (let index = 0; index < 10; index++) {
      charArr[index]=48+index;
      
    } 
    offset+=10;
  
     for (let index = 0; index < 26; index++) {
      charArr[index+offset]=65+index;
      
    }
    offset+=26;
     for (let index = 0; index < 26; index++) {
      charArr[index+offset]=97+index;
      
    }
   

    for (let index = 0; index < lengthOfRandomChar; index++) {
        let randomIndex = Math.floor(Math.random()*charArr.length)
        randomChars[index]=charArr[randomIndex];
    }
    return String.fromCharCode(...randomChars)


  }

