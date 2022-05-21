function pairCheck(arr,diff){
    arr.sort((a, b) => a - b);       //sort the array
    let pointer1=0;                  //points to the starting index of array
    let pointer2=arr.length-1;       //points to the last index of array 
    
    while(pointer1<pointer2){        // so that we dont consider same combination twice 
      if(arr[pointer2]-arr[pointer1]===diff){      //check if the current difference matches the target difference
        return 1;                                  //return 1 when target difference is matched
      }
      //check if the current difference is greater than the target difference
      else if(arr[pointer2]-arr[pointer1] > diff){  
        pointer2--;      //Decrement pointer2 so that next time we will have a differnce less than the current difference       
      }
      else{
        pointer1++;     //Increment pointer1 so that next time we will have a differnce greater than the current difference 
      }
    }

    return 0;          //Return 0 , as we could not find pair that gives us target difference
    
  }
  
  
  a=[10,5,3,2,50,80]
  b=[-10,20] 
  console.log(pairCheck(a,78));
  console.log(pairCheck(b,30));
  