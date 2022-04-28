//function to check if a character is vowel
function isVowel(char){
    return 'aeiou'.includes(char);
  }
  
  // create a function taking string as argument
function vowelCount(string){
    //create a map 
    const vowelMap=new Map();
    //loop through the string 
    for(let char of string){
        // convert character to lower case
      let lowerCaseChar=char.toLowerCase();
       // check if the character is vowel  
      if(isVowel(lowerCaseChar)){
          //check if the particular vowel is already in the map
          if (vowelMap.has(lowerCaseChar)){
              //increment the value corresponding to the vowel by 1
          vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1)
        }
          else{
              //set a key as vowel in the map and give it a value of 1
            vowelMap.set(lowerCaseChar,1);
          }
      }
    }

    // return the vowelMap
    return vowelMap;
  }
  
  console.log(vowelCount('aeiouaeiou'))
  
  console.log(vowelCount('Vishwa'))