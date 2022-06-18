class Graph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
            
            return true    
        }

        return false
    }

    addEdge(vertex1,vertex2){
        
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2] ){
            this.adjacencyList[vertex1].push(vertex2);
        
            return true;   
        }
    return false;

    }

    removeEdge(vertex1,vertex2){
       
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2] ){
            this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter((vertex)=>{return vertex!==vertex2 })            
            return true;   
        }
    return false;
    }


    removeVertex(vertex){

        while(this.adjacencyList[vertex].length){
            let temp=this.adjacencyList[vertex].pop();
            this.removeEdge(temp,vertex)
        }
        delete this.adjacencyList[vertex];

    }
}

//graph construction
let g=new Graph();
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(3,4);
console.log('graph',g);


function allPath(graph,source,target){
 let ans=[];          //stores all the possible path array
 let path=[];         //stores the path traversed
 traverse(graph,ans,path,source,target)     //calling the recursive traverse function

 return ans;          //returning all possible paths from source to target
}

function traverse(graph,ans,path,source,target){
 path.push(source)               //push the vertex to the path

 if(source==target){           //check if the source/current vertex is the destination & if true
    ans.push([...path]);       //push the current path to our answers array 
    return;                    //return from the function
 }
  

  for(let i=0;i<graph.adjacencyList[source].length;i++){
    //calling traverse function for each of the adjacent elements of current vertex
    traverse(graph,ans,path,graph.adjacencyList[source][i],target);
    //once the target is reached it returns and further each element is popped 
    //so as to be in sync with traversal
    path.pop();
  }

}


console.log(allPath(g,1,4));
