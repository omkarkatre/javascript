console.log(`Count the total number of characters a and A avaiable in string`);
console.log(`------------------`);
string1="I Am Learning Javascript,The Langague Of Internet";
string2=`My favourite movie is LAggAn`;
    
    var str=0;
function countCharA() {
    for (let index = 0; index <= string1.length; index++) {
        var char=string1.charAt(index);
       if (char=="a"||char=="A") {
       
        console.log(`Length of string1-->${char}`);
        str++;

       }
        }
        console.log(`${str}`);
        
      
    }
    
    
    var str=0;
    function countCharA() {
    for (let index = 0; index <= string2.length; index++) {
        var char=string2.charAt(index);
       if (char=="a"||char=="A") {
       
        console.log(`Length of string2-->${char}`);
        str++;

       }
        }
        console.log(`Total count is -->${str}`);
        
      
    }



   countCharA(string2);
   countCharA(string1);

