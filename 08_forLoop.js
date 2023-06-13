function reverseWord(word){

    var reverseString = "";

    var wordLength = word.length - 1;

    for (let index = wordLength; index >= 0; index--) { // index = 9  8 

        var char = word.charAt(index);

        reverseString = reverseString.concat(char);    

    }

console.log(reverseString);

}

reverseWord("JavaScript");

reverseWord("Google Chrome");

reverseWord("Developer");

