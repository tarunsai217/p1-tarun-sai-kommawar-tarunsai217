function Promise(number){
    let state=false;
    let value;
    
    function resolve(val){
      state=true;
      value=val;
    }
    
    function reject(error){
      state=false;
      value=error;
    }
    
    
    if(number%5==0){
      console.log()
      resolve(number/5)
    }
    
    else{
      reject('Number is not divisible by 5')
    }
    return {
      then:(fn)=>{if(state){fn(number/5) }; return new Promise(number) },
      catch:(fn)=>{if(!state){fn('Number is not divisible by 5')}; return new Promise(number) }
    };
  }
  
  
  
  function divide(number){
    return new Promise(number);
  }
  
  
  divide(13).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})