let arrayNumbers=[22,11,44,55,77,33]
console.log(`=======No1=======`);
for (let index=0;index<arrayNumbers.length; index++) {
    if (index%2==0) {
        const element = arrayNumbers[index]   
        console.log(`The Even positional element is:${element}`);
    }
}

console.log(`=======No2=======`);
let sum=0;
for (let index=0;index<arrayNumbers.length;index++) {
    const element = arrayNumbers[index];
    sum=sum+element;  
} console.log(`total Number of array sum is ${sum}`);