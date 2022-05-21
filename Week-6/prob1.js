function subArray(arr,length=arr.length){
    let max_so_far=0;  //would store the maximum sum of subarray encountered so far
    let cur_max=0;     // would store the sum of current subarray in consideration
    for(let i=0;i<length;i++){
      cur_max=Math.max(arr[i], cur_max+arr[i]); //check if the individual element adds more value than the subarray under consideration
      max_so_far=Math.max(max_so_far,cur_max); //if the current sum of subarray is greater than maximum sum of subarray encountered so far set it to max_so_far 
    }
    
    return max_so_far;    // return maximum sum of subarray encountered so far
  }
  
  
  let a=[1, 2, 3, 4, -10]
  let b=[-2, 1, -3, 4, -1, 2, 1, -5, 4]
  
  
  console.log(subArray(a))
  console.log(subArray(b))