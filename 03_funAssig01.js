console.log("--------function---------");
function show(){
    console.log("first function with no  argument and no return type:");

}
show();
function display(){
    console.log("second function with no  argument and no return type:");
}
display();
console.log("----------personal details-------");
function personalDetails(firstName,lastName,collegename){
    console.log("My Personal Details");
    firstName="Omkar"
    lastName="katre"
    collegename="ADCET"

    console.log("My name is:",firstName);
    console.log("My name is:",lastName);
    console.log("My name is:",collegename);


}
personalDetails();
console.log("-----Q3------");
function swapValuesDude(firstName1,firstName2)
{
    firstName1="Virat";
    firstName2="Anushka";
    console.log("Before sawp:",firstName1,firstName2);
    var Temp=firstName1;
    firstName1=firstName2;
    firstName2=Temp;

    console.log("After sawp:",firstName1,firstName2);

  

}
swapValuesDude();
console.log("--------Q3.3--------------");
function swapValuesDude(no1,no2)
{
    no1=1000;
    no2=2000;
    console.log("Before sawp:",no1,no2);
    var temp=no1;
    no1=no2;
    no2=temp;
    console.log("After sawp:",no1,no2);
}
 swapValuesDude();
 console.log("--------step4--------");
 function addThreeValues(a,b)
 {
    a="10.23,600,40";
    console.log("before addition:",a);
    a=10.23+600+40;
    console.log("After addition:",a);
    b="Hello Good Morning";
    console.log("before addition:",b);
    b="HelloGoodMorning";
    console.log("After addition:",b);

    

 }
 addThreeValues();
 


