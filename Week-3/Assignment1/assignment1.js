function add(...args){
    let sum=0;
    args.forEach((number)=>{sum+=Number(number)});
    return sum;
  }
  
  
  const cache=new Map();
  function memoize(fn){
     
    return function(...args){
      const key=args.toString();
      
      if(cache.has(key)){
       return cache.get(key);
      }
      
      cache.set(key, fn(...args));
      
      return cache.get(key);
    }
  }
  
  let addMemoize=memoize(add)
  
  console.time()
  console.log(addMemoize(1,2,3,4,5))
  console.timeEnd();