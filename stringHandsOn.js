console.log("----------Assignment-------------");
function stringHandsOn() {
    var Given="   hey you are doing good,keep it up    ";
    String=Given.length
    console.log("Given a string: ",Given);
    console.log("length of string: ",String);


var Given="   hey you are doing good,keep it up    ";
var trimString=Given.trim();
console.log("Trimmed string & it's length is => ",trimString,trimString.length);
console.log("--------------------------------------------------------------------");

var xSpaces = (String) - (trimString.length);
console.log(" Total extra spaces in trimmed String is =>",xSpaces);
console.log("--------------------------------------------------------------------");
var firstName = trimString.charAt(0);
var lastName= trimString.charAt(trimString.length-1);

console.log("First & Last character of trimmed string is =>",firstName,lastName);
console.log("--------------------------------------------------------------------");
}
stringHandsOn();
