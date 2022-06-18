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
            this.adjacencyList[vertex2].push(vertex1);
        
            return true;   
        }
    return false;

    }

    removeEdge(vertex1,vertex2){
       
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2] ){
            this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter((vertex)=>{return vertex!==vertex2 })
            this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter((vertex)=>{return vertex!==vertex1 })
            
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



function ifPathExists(edges,source,destination){
  let graph=new Graph();               //Create a Graph Instance
  for(let i=0;i<edges.length;i++){     //Construct a graph using edges array 
    graph.addVertex(edges[i][0]);      //Inserting vertex  
    graph.addVertex(edges[i][1]);

    graph.addEdge(edges[i][0],edges[i][1]);     //Creating edges
  }


  let result=dfsOfGraph(graph,source);         //Depth First Search of Graph

  if(result.includes(destination)){
    return true;
  }

  return false;
}

console.log('testcase1',ifPathExists([[0,1],[1,2],[2,0]],0,2));
console.log('testcase2',ifPathExists([[0,1],[0,2],[3,5],[5,4],[4,3]],0,5));





function dfsOfGraph(graph,vertex){
    let path=[];                                        //traversed path array
    let visitedList={1:false,2:false,3:false,4:false};   //visited List
    dfs(graph,vertex,path,visitedList);                 //calling recursive dfs function
    return path;
}

function dfs(graph,vertex,path,visitedList){
    visitedList[vertex]=true;               //mark the vertex as visited 
    path.push(vertex);                      //push the vertex to the path

    for(let i=0;i<graph.adjacencyList[vertex].length;i++){
        let v=graph.adjacencyList[vertex][i];
        //for each adjacent vertex of the current vertex call the recursive function if not visited
        if(!visitedList[v]){
            dfs(graph,v,path,visitedList,)
        }
    }
}

