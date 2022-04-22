function fibanocci(n){
    let before=0;
    let current=1;
    let after=1;
    for(let i=0;i<n;i++){
      console.log(before);
    before=current;
    current=after;
    after=before+current;
    }
  
    
  }
  
  fibanocci(7);