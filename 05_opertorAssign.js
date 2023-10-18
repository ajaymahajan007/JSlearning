function score(gradeScore,hscScore,sscScore,cadidateName){
let allScore=gradeScore>=70||hscScore>=80||sscScore>=90?'Congrates you are eligible For Tcs interview':'Else Unfortunately you are not eligible for interview';
console.log(`${cadidateName} ${allScore}`);
}score(80,86,90,'Ajay')
score(70,65,55,'Rohit')
score(60,79,88,'Aniket')