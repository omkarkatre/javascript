var tcsInterviewEligibilty= function(gradScore,hscScore,sscScore,candidateName )
{
    var result= gradScore>=70||hscScore>=80||sscScore>90?`Congrates!${candidateName} you are eligible for TCS interview`:`Unfortuntly ${candidateName} you are not eligible for TCS interview`

    console.log(`${result}`);
}
console.log(`------ TCS ElIGIBLITY CRITRIA---------`);
tcsInterviewEligibilty(80,86,90,"omkar")
tcsInterviewEligibilty(70,65,55,"Sanket")
tcsInterviewEligibilty(60,79,88,"om")


