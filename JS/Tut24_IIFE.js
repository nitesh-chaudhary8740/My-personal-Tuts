const name = 'nik';//semi-colon are must to seperate the IIFE
(function (){
    console.log('hello',name)
})();
(()=>{
    console.log("hi",name)
})();