const hasDuplicate=(arr)=>{
    //create a set with the given array
    let set=new Set(arr);
    //check if size of array and set are same and return boolean accordingly
    if(arr.length!==set.size){
      return true;
    }
    else{
      return false;
    }
  }
  
  console.log(hasDuplicate([1,2,3]));
  
  console.log(hasDuplicate([1,2,3,4,2,1]))