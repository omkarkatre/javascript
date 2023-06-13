var word="I am very good IT Developer"//a e i o u==A E I O U
var count=0;
for (let index = 0; index < word.length; index++) {
    var char=word.charAt(index);
    if (char==`a`||char==`e`||char==`i`||char==`o`||char==`u`||
    char==`A`||char==`E`||char==`I`||char==`O`||char==`U`   ) 
    {
        console.log(` vowels is:${char}`);
        count++;
    }
    
}
console.log(`Given string is :${word}`);
console.log(`count the total vowels:${count}`);
console.log(`----------sum of cube number--------`);


function sumOf() {
    var cube;
   var sum=0;
for (let index = 0; index <=5; index++) {
    cube=index*index*index;
console.log(`cube is given:${cube}`);
    sum=sum+cube;
    
}
console.log(`sum of given:${sum}`);
}
sumOf(5);
console.log(`-------3.1---------`);
givenstring1=(`Soon I will be angular IT Develpoer`);

var str=" ";
function oddPostionedChars(givenstring) {
    
    for (let index = 0; index <= givenstring.length; index++) {
       var char= givenstring.charAt(index)
        if (index%2!=0&& char!=" ") {
            str=str+char;

            
        }
        
    }
    console.log(`${str}`);
}
oddPostionedChars("Hard work alawys pay back");
var str="";

oddPostionedChars(givenstring1)
{
    for (let index = 0; index <= givenstring1.length; index++) {
       var char= givenstring1.charAt(index);
       if (index%2!=0&& char!=0 ) {
        str=str+char;   
       }
        
    }
    console.log(`${str}`);
}
oddPostionedChars("Soon I will be angular IT Develpoer")
