console.log(`======>Assigment A<=========`);
function squareOfWordLenth(str) {
var result=str.length;
var print=result*result;
return print
}var word=squareOfWordLenth("Javascript")
var chrome=squareOfWordLenth("Google Chrome");
 var smart=squareOfWordLenth("Developer Smart");
 console.log(`the given sting is "javascript" and its square is ${word}`);
 console.log(`the given sting is "Google Chrome" and its square is ${chrome}`);
 console.log(`the given sting is "Developer Smart" and its square is ${smart}`);
 console.log(`======>Assigment B<=========`);
function angular() {
    var value1="I am angular developer ";
    var result=value1.length;
    console.log(`Given string is ======>${value1}`);
    console.log(`Given string lenth is ======>${result} `)
    console.log(`Total No of word is =======>${value1.split(" ")}`);
    var output=result/5;
    var multi=result*5;
    console.log(`the result after divideing of lenth is=======> ${output}`);
    console.log(`the result after multipication of lenth is=======> ${multi}`);
}angular();