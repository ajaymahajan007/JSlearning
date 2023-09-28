function stingHandsOn() {
    var sentence="   Hey you are doing good,keep it up    "
    console.log(`1. Given sting is:${sentence}`);
    var len=sentence.length;
    console.log(`2. Given string lenth is:${len}`);
    var romove=sentence.trim();
    var romovelen=romove.length;
    console.log(`3.Romoved Spaces lenth is:${romovelen}`);
    var result=len-romovelen;
    console.log(`4.Total number of romved spaces is:${result}`);
    console.log(`5.first character on line is:${romove.charAt(0)} , and last character is:${romove.charAt(romovelen-1)}`);
    console.log( `6.Total Number of Word String is : ${romove.split(" ")}`);
    console.log(`7.Index of "good" is :${sentence.indexOf("good")}`);
    console.log(`8.The line start with 22 is ${romove.slice(22)}`);
    console.log(`9.The check end string "up" is :${romove.endsWith("up")}`);
    console.log(`10.The check start string "Hey" is :${romove.startsWith('Hey')}`);
}stingHandsOn()
