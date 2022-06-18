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


//maxDepth function accepting the root of node
function maxDepth(node)
    {
        if (node == null)
            return -1;
        else
        {
            // computing the depth of each subtree 
            let lDepth = maxDepth(node.left);
            let rDepth = maxDepth(node.right);
   
            // using  the larger one 
            if (lDepth > rDepth)
                return (lDepth + 1);
             else
                return (rDepth + 1);
        }
    }
    
console.log(maxDepth(root));