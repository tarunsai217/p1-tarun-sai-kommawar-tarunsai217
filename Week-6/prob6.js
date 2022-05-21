function threeSum(arr,target){
    min=Number.MAX_SAFE_INTEGER ;   // stores the minimum difference between sum of 3 elements and target
    minSumIntegers=[];
    sum=0;
    arr.sort((a,b)=> a-b);           //sort the array
    for(let i=0;i<arr.length;i++){   //loop over through array
      let current=i;                 //fixate one element which is current element 
      let p1=i+1;                    //points to the index next to the current element
      let p2=arr.length-1;           //points to the last index of array 
      while(p1<p2){                  // so that we dont consider same combination twice  
        // check if the minimum difference between sum of 3 elements and target is less than min encountered so far     
        if(Math.abs(arr[p1]+arr[p2]+arr[current]-target)< min){    
          minSumIntegers=[];                                    // set min ,sum and minSumIntegers accordingly
          min= Math.abs (arr[p1]+arr[p2]+arr[current]-target);
          minSumIntegers.push(arr[p1],arr[p2],arr[current])
          sum=arr[p1]+arr[p2]+arr[current]
        }
        //check if the sum of 3 is equal to the target and return as the solution is found
        if(arr[p1]+arr[p2]+arr[current]-target=== 0){
          minSumIntegers.push(arr[p1],arr[p2],arr[current])
          return target;
        }
        //check if the sum of 3 is exceeding the target and if its true, decrement p2 so that 
        //next sum of 3 elements would result in a summ less than current sum
        if(arr[p1]+arr[p2]+arr[current]>target){
          p2--;
        }
        //check if the sum of 3 is falling short of the target and if its true, increment p1 so that 
        //next sum of 3 elements would result in a sum greater than current sum
        else{
          p1++;
        }
      }
    }
    
    return sum;
  }
  
  console.log(threeSum([-1,2,1,-4],1));