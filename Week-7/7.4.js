//isMatching function takes two characters and check if the opening and closing combination matches and returns a boolean
function isMatching(c1,c2){
    if((c1=='}' && c2=='{') || (c1==']' && c2=='[') || (c1==')' && c2=='(')){ return true}
    else{return false }
  }

//parenthesisChecker function takes the string as argument
  function parenthesisChecker(s){
    let arr=[];
    for(let i=0;i<s.length;i++){
      let char=s[i]  //character under consideration
      //if its an opening bracket push into the array
      if(char=='{' || char=='[' || char=='('){
        arr.push(char);
      }
     
      //if there is a closing bracket when there's no opening bracket(arr empty)
      //then return false beacuse that would not be proper combination of opening and closing brackets
      else{
         if(arr.length===0){return false}
      //if the closing bracket does not match with the last element of arr return false   
         else if (!isMatching(char,arr[arr.length-1])){
           return false
         }
      //if the closing bracket matches with the last element of arr then 
      //current combination has been found and pop the last element
         else{
           arr.pop();
         }
      }
    }
    //if for every opening bracket corresponding closing bracket has been found in order
    //then array would be empty so accordingly returning the expression
    return arr.length===0;
  }
  
  let s1= "[()]{}{()()}"; 
  let s2= "[(])"
  
  console.log(parenthesisChecker(s1));
  console.log(parenthesisChecker(s2));