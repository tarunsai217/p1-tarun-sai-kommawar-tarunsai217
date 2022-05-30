class Node{
    constructor(value){
     this.value=value;
     this.next=null;
    }
}

class Stack{
    constructor(value){
        if(value){
       let newNode=new Node(value);
       this.top=newNode;
       this.length=1;
    }
       else{
         this.length=0;
       }
    }
    
    push(value){
        let newNode=new Node(value);
        if(this.length===0){
            this.top=newNode;
        }
        else{
            newNode.next=this.top;
            this.top=newNode;
        }
        this.length++
        return this
    }

    pop(){
        if(this.length===0){return undefined;}
           let temp=this.top;
           this.top=this.top.next;
           temp.next=null;
        this.length--
        return temp;
    }

    peek(){
        return this.top;
    }
}

let s1=new Stack(); //stack1 
let s2=new Stack(); //stack2 


class Queue{
  constructor(){
    this.queue=s1;
  }

  //pushing into queue (push into stack1)
  push(value){
    s1.push(value);
  }

  //for pop , pop from s1 and push into s2 and the top element of s2 is popped
  pop(){
    while(s1.length){
      s2.push(s1.pop().value);
    }
    let ans=s2.pop();
    
    while(s2.length){
      s1.push(s2.pop().value);
    }
    return ans;
  }
  //for pop , pop from s1 and push into s2 and the top element of s2 is obtained through peek
  peek(){
    while(s1.length){
        s2.push(s1.pop().value);
      }
      let ans=s2.peek();
      
      while(s2.length){
        s1.push(s2.pop().value);
      }
    return ans;  
  }
}


let q1=new Queue();
q1.push(2);
q1.push(4);
q1.push(6);
console.log(q1,'6')
console.log("popped",q1.pop())
console.log("peek",q1.peek())
console.log(q1);