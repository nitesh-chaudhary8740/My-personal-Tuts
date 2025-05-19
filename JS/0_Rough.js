const obj = {
    key1:'value1',
    key2:'value2',
    func1:function(){
        console.log(this.key1);
        (()=>{
            console.log(this.key2)
        })();
    },
    func2:()=>{
        console.log(this.key2)
    },
  
}

obj.func1()
obj.func2()