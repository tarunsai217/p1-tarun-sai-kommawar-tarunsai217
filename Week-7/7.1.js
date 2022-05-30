//creating Node class for LinkedListnode
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
} 

//creating linkedList class with push and reverse methods  
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
    
   reverse(){
        //swapping the head and tail pointers 
        let temporary=this.head;       
        this.head=this.tail;
        this.tail=temporary;
        
        // creating 3 pointers temp--pointing to current element(initially to head)
        //prev--pointing to element before current
        //next--pointing to element after current
        let prev=null;
        let temp=this.head;
        let next=this.head.next;
        //iterating through the linked list
        while(temp.next){
           temp.next=prev; // making temp point to its previous node
           prev=temp;      // moving prev pointer 1 unit to right to the linked list
           temp=next;      // moving temp pointer 1 unit to right to the linked list 
           next=next.next; // moving next pointer 1 unit to right to the linked list
        }
      
        return this       //return linkedlist
    } 
}

let linkedList=new LinkedList(5);
linkedList.push(3);
linkedList.push(7);
linkedList.push(9);
linkedList.push(2);
linkedList.push(1);

console.log(linkedList.reverse())