function maxProfit(priceArray){
    let maxprofit=0;                        //would be max profit encountered so far
    for(let i=0;i<priceArray.length;i++){   //loop over through priceArray
      let current=priceArray[i];
      for(let j=i+1;j<priceArray.length;j++){  //loop over through dates which are greater than currentDay of priceArray
        if(priceArray[j]-current > maxprofit ){ //check if this combination would result in profit greater than maxProfit
          maxprofit=priceArray[j]-current;      //update the maxProfit with the newest encountered maxProfit
        }
      }
    }
    return maxprofit
  }
  
  
  let a=[7,1,5,3,6,4]
  let b=[7,6,4,3,1]
  
  console.log(maxProfit(a));
  console.log(maxProfit(b));