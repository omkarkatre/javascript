const arrayFruits=["Banana","Orange","Apple","Mango","Watermelon"];
let zerothIndexValue=arrayFruits[0]
let lastname =arrayFruits[arrayFruits.length-1]
console.log(`${zerothIndexValue}`);
console.log(`${lastname}`);
arrayFruits.unshift(`Papaya`)
console.log(`2] Add element -->${arrayFruits}`);
const spliceArray=arrayFruits.splice(4,1);
console.log(`3] Remove the mango from array--> ${spliceArray}`);
arrayFruits.push(`Pinapple`);
console.log(`4] Add pinapple to the last position -->${arrayFruits}`);
const insertElement=arrayFruits.splice(4,0,`Dragon `);
console.log(`5] insert element Dragon berfore thwe watermelon--> ${arrayFruits}`);
arrayFruits[arrayFruits.length-5]=`kiwi`;
console.log(`6] Replace an element orange with kiwi--->${arrayFruits}`);
const indexFruit=arrayFruits.slice(1,4);
console.log(`7] log the element from index 1 to 4  ${indexFruit}`);
var arrayFruit=[`Dragon`,`Watermelon`,`Pinapple`];
let lengthOfArray=arrayFruit.length;
console.log(`Length of array--->${lengthOfArray}`);