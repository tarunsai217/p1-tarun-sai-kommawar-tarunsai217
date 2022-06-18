class Node
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}

//constructing a tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.left.left=new Node(6)
root.left.right = new Node(5);


function validateBinaryTree(root){
    //call a helper function with plus and minus infinity as range 
    return  validateHelper(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER );
}

function validateHelper(currentNode ,min,max){
    //check if the current node is null if true return true because it is a BST
    if(currentNode==null){
        return true;
    }
    //if the currentNode is not in the range return false
    if(!(currentNode.value>min && currentNode.value<max)){
       return false
    }

   //call the recursive function for both left and right child of current node
   //for the left child upperbound will be the value of currentNode-1 as per BST
   //for the right child lowerbound will be the value of currentNode-1 as per BST
   return validateHelper(currentNode.left,min,currentNode.value-1) &&
     validateHelper(currentNode.right,currentNode.value+1,max)

};


console.log(validateBinaryTree(root))