function createStack(){
    let items=[];
    function push(item){
      items.push(item);
    }
    
    function pop(){
      return items.pop()
    }
    
    return {push,pop}
    
  }
  
  let stack=createStack();
  stack.push(10);
  stack.push(5);
  console.log(stack.pop())