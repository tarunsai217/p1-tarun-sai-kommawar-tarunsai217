let a=[0,1,0,1,0]
let b=[0,2,1,2,0]


function sort(arr){
  let pointer1=0;               //points to the starting index of array
  let pointer2=arr.length-1;    //points to the last index of array
  
  for(let i=0;i<arr.length;i++){
    
    if(i>pointer2){ return arr} //if i exceeds the pointer 2 its reaching the sorted part of arr so just return array 
    
    if(arr[i]===0){             //check if the current element is equal to 0 
      let temp=arr[pointer1];   //swap values of current index with the pointer1 index
      arr[pointer1]=arr[i];
      arr[i]=temp;
      pointer1++;               //increment the pointer1 index by 1
    }
    
    if(arr[i]===2){            //check if the current element is equal to 2
      let temp=arr[pointer2];  //swap values of current index with the pointer2 index
      arr[pointer2]=arr[i];
      arr[i]=temp;
      pointer2--;              //decrement the pointer2 index by 1 
    }
    
  }

  //now that 0's and 2's are placed accordingly 1's would be places in middle automatically so return array
  return arr;                  
}


console.log(sort(a));
console.log(sort(b));