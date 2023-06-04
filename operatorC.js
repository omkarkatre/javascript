console.log(`----------check the male Eligiblity for marriage----------`);
var maleMarriageEligibility = function(gender,Age,boyName)
{
    var Age=25;
    var result=Age>=21 ?` Bill  gate are eligible for marriage`:`Bill  gate are not eligible for marriage`
    
    console.log(`${result}`);
    var Age=17;
    var result=Age>=21 ?` Stew Jobs are eligible for marriage`:`Stew Jobs are not eligible for marriage`
    console.log(`${result}`);
}
maleMarriageEligibility();
console.log(`----------check the female Eligiblity for marriage----------`);
var femaleMarriageEligibility = function(gender,Age,girName)
{
    var Age=16;
    var result=Age>=18 ?` Jenifer are eligible for marriage`:`Jenifer are not eligible for marriage`
    
    console.log(`${result}`);
    var Age=27;
    var result=Age>=18?` Malinda are eligible for marriage`:`Malinda are not eligible for marriage`
    console.log(`${result}`);
}
femaleMarriageEligibility();

