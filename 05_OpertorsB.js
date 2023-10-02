console.log(`======>Assigment-B. NO==1<=========`);
function greaterNumber(num1,num2){
var result=num1>=num2?" greter than ":"less than"
console.log(`${num1} is ${result} ${num2}`);
}greaterNumber(10,-10)
greaterNumber(800,899)
console.log(`======>NO 2<=========`);

function isEvenorOddNum(num1) {
    var result=num1%2==0?"given number is even":" given number is Odd";
    console.log(`${num1} = ${result}.`);
}isEvenorOddNum(29)
isEvenorOddNum(44);
isEvenorOddNum(0);
isEvenorOddNum(101);
console.log(`======>NO C<=========`);
function wordLength(num1) {
    var result=num1.length;
    var output=result%2==0?"even":"odd";
    console.log(`the lenghs of '${num1}' is ${result} and this is "${output}" number`);
}wordLength("javascript");
wordLength("Developer");
wordLength("Google")