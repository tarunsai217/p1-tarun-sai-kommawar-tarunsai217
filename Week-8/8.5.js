//function accepting number of people and trust array
function townJudge(n,trust){
 
//creating outflow and inflow zero element arrays which track the outflow and inflow edges from each vertex    
let outflow=Array.from(Array(n+1), () => 0)   
let inflow=Array.from(Array(n+1), () => 0)

for(let i=0;i<trust.length;i++){
 outflow[trust[i][0]]+=1;         //increment the outflow by 1 for respective vertex
 inflow[trust[i][1]]+=1;          //increment the inflow  by 1 for respective vertex
}

//Once ouflow and inflow arrays are constructed
//Loop through the outflow array and find the index/element for which outflow is 0
//Check if it satisifies inflow is equal to number of people-1 condition also and return the index/element 
for(let i=1;i<=n;i++){
    if(outflow[i]==0){
        if(inflow[i]==n-1){ return i}
    }
}

return -1;
}

console.log(townJudge(2,[[1,2]]));

console.log(townJudge(3,[[1,3],[2,3]] ) );

console.log(townJudge(3,[[1,3],[2,3],[3,1]] ) );

