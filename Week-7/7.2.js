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
let linkedList=new LinkedList(2);
linkedList.push(4);
linkedList.push(7);
linkedList.push(8);
linkedList.push(9);


// rotate function accepting the list and nodes(rotating by how many nodes)
function rotate(list,nodes){
  for(let i=0;i<nodes;i++){
  let temp=list.head;       //temp pointing to the head of list
  list.head=list.head.next; //shifting the head of the list to the 2nd node of list
  temp.next=null;           //breaking the connection between current head with its next element
  list.tail.next=temp;      //adding the temp to the end of linkedlist
  list.tail=list.tail.next} //changing the reference of the tail of list to the newly added node in the end
  
  return list;
}

console.log(rotate(linkedList,3));