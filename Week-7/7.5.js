//function NextGreaterELment accepting the array as argument
function NextGreaterELment(arr){
    let stack=[];
    let result=[]; // storing the next greater element of each element
    for(let i=0;i<arr.length;i++){
      //if the stack is empty push the current element index in stack
        if(stack.length==0){ 
        stack.push(i); 
        continue; }
      //if the current element is less than the top element of stack push the index of element
      if(arr[i]<=arr[stack[stack.length-1]]){
        stack.push(i)
      }
      
      else{
        //if the current element is greater than the top element of stack then nextGreaterelemet is found 
        //then pop the top element in stack and put it in the result array accordingly  
        while(arr[i]>arr[stack[stack.length-1]]){
          let index=stack.pop();
          result[index]=arr[i];
        }
        //push the current element under consideration index in stack
        stack.push(i);
      }
    }
    
    //if stack array remains non empty thenfor all the indexes in stack we could not found
    //a next greater element so putting in -1 for all those indexes accordingly
    for(let i=0;i<stack.length;i++){
      result[stack[i]]=-1;
    }
    
    //returning our result array
    return result;
  }
  
  let a1=[1,3,2,4]
  let a2=[6,8,0,1,3]
  
  console.log(NextGreaterELment(a1))
  console.log(NextGreaterELment(a2))