function tcsInterviewEligiblity(gradScore,hscScore,sscScore,candidateName) {
    if (gradScore>=70||sscScore>=80||candidateName>90) {
        console.log(`congrates ${candidateName} you are eligible for interview`);
    } else {
        console.log(`unfortuntly,${candidateName}you are not eligible for interview`);
    }
}
tcsInterviewEligiblity(80,86,90,"Omkar");
tcsInterviewEligiblity(70,65,55,"Akshay");
tcsInterviewEligiblity(60,79,88,"Ram ");