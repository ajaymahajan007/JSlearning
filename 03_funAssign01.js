console.log("=========NO 1==========");
function date(){
    console.log("My Birth Date: 08/09/2002");
    console.log("Pin-415539");
}date();
console.log("=========NO 2==========");
function personalDetail(firstName,lastName,collageName){
console.log("first Name:" + firstName);
console.log("last Name:" + lastName);
console.log("Collage Name:" +collageName);
}personalDetail("Ajay"," Mahajan"," SGM collage Karad")
console.log("=========NO 3==========");
function swapValues(value1,value2){
    console.log("-------Before Swap--------");
    console.log(value1,value2);
    console.log("-------After Swap--------");
    temp=value1;
    value1=value2;
    value2=temp;
    console.log(value1,value2); 
}swapValues("Virat", "Anushka");
swapValues(1000,2000);
console.log("=========NO 4==========");
function addThreeValue(a,b,c,){;
    var result=a+b+c;
return result;
} var num =addThreeValue(10.23,600,40);
 var out=addThreeValue("hellow" ," Good", " Morning ");
console.log("Addition OF Three Number Is " + num);
console.log(out);
