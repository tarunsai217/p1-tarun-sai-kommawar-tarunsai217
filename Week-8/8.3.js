class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=null;
        this.right=null;
    }
}


//constructing a tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.left.left=new Node(6)
root.left.right = new Node(5);

function levelOrderTraversal(root){
  let queue=[];     //queue to track priority
  results=[];       //array to store traversal path
  queue.push(root); //pushing root initially to the queue as its the top most element in hirearchy
   
  //while there are elemnts in queue
  while(queue.length){
    let currentNode=queue.shift();  //pop the element of the queue
    results.push(currentNode.data); //push it to the result array
    if(currentNode.left){queue.push(currentNode.left)}  //push the left node of the current node to the queue if exists
    if(currentNode.right){queue.push(currentNode.right)} //push the right node of the current node to the queue if exists
  }
  
  //return the level order traversal path
  return results; 
}

console.log(levelOrderTraversal(root));