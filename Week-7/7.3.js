//creating Node class for LinkedListnode
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
} 

//creating linkedList class with push method
class LinkedList{
    constructor(value){
        let newNode=new Node(value);
        this.head=newNode;
        this.tail=this.head;
        this.length=1;
    }

    push(value){ 
      let newNode=new Node(value);  //Create a node with passed value
      
      if(!this.head){               //Check if the linked list is empty
        this.head=newNode;          //Set the head and tail of linked list to the new Node 
        this.tail=this.head; 
      }

      else{
        this.tail.next=newNode;       //Point the next attribute of tail of linked list to the newNode 
        this.tail=newNode;            //Point the tail of linked list to the new node 
      }
      
      this.length+=1;               //Increment the length by 1
      return this                   //Return the linked list 
    }
}

//creating linkedlist and pushing nodes
let linkedList=new LinkedList(5);
linkedList.push(3);
linkedList.push(7);
linkedList.push(9);
linkedList.push(2);
linkedList.push(1);


//checkloop function accepting linkedlist as argument
function checkLoop(list){
  var s = new Set()      //creating a set
  let temp=list.head;    //pointing temp to the head of the list
  
  //iterating over the linkedlist
  while(temp!=null){
    if (s.has(temp)) {return true}; //if we already have this node in our set it means there is a loop so return true
    s.add(temp)                     //if we are seeing the node for first time add it to the set
    temp=temp.next                  //making temp point to its next node
  }
  
  return false;                   // if no loop is found return false
}

checkLoop(linkedList);