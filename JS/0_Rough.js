function func1 (){
   console.log('outer function invoked')
   let func1Var = 'function 1'
   function func2 (){
 
 // console.log(func1Var)
     console.log('fucntion 2 ends',this)
     console.log('fucntion 2 ends',this.func1Var)
 
}
   func2();
   console.log('fucntion 1 ends')
}

func1()

