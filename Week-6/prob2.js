let result=[];
function spiralMatrix(array){
  
   for(let i=0;i<array.length;i++){  //loop through the array
     let current=array[i]; 
     if(Array.isArray(current)){  //check if there is array at current index
      spiralMatrix(current);      // if its array make a recursive call
     }   
     else{
       result.push(current);      //if its not of type array push the element to the result array
     }
   }
  
  return result;                 // return 1d result array;
}


let a= [ [ 1, 2, 3 ], [[ 4], 5, 6 ], [ 7, 8, 9 ] ];

console.log(spiralMatrix(a));