console.log(`----------------------Step 1-----------------------------`);
class Vehical{
    name
    color
    feaultype
    engine
    Spped
    constructor(name,color,feaultype,engine,Spped){
        this.name=name;
        this.color=color;
        this.feaultype=feaultype;
        this.engine=engine;
        this.Spped=Spped;
    }
}
const vehical1=new Vehical("Range Rover","Black","Petrol & Diesel","1998cc","210 to 217 kmph")
const vehical2=new Vehical("Mercedes-Benz GLE","white","Diesel & Petrol","1950 to 2999 cc","225 to 250 kmph")
const vehical3=new Vehical("suzuki-Benz GLE","Red"," Petrol","1900 to 2999 cc","210 to 230 kmph")
const vehical4=new Vehical("tata-Benz GLE","Geray","Diesel","1920cc","180 to 205 kmph")
const vehical5=new Vehical("audi-Benz GLE","White","Diesel & Petrol","1980 to 2020 cc","239 to 260 kmph")

let arrayOfVehical=[vehical1,vehical2,vehical3,vehical4,vehical5];
for (const element of arrayOfVehical)
 {
    console.log(`Name: ${element.name},color:${element.color},feaultype${element.feaultype},engine:${element.engine},spped:${element.Spped}`);
 }   
 console.log(`----------------------Step 2-----------------------------`);
class collage{
  collageName
  address
  university
  pinCode
  constructor(collageName,address,university,pinCode){
    this.collageName=collageName;
    this.address=address;
    this.university=university;
    this.pinCode=pinCode;
  }
  display() {
    console.log(`collage detail as  follows=====>College Name : ${this.collageName}, Address: ${this.address},University : ${this.university},Pincode: ${this.pinCode}`);
  }
}
const collage1=new collage("SGM Collage","karad","Autonomus",415539)
const collage2=new collage("Y.C.Collage","Islampur","Shivaji univercity",801303)
const collage3=new collage("Foruson Collage","Pune","Pune univercity",411001)
const collage4=new collage("DYSP collage","kolhapur","Shivaji univercity",416001)
let arrayCollage=[collage1,collage2,collage3,collage4]
for (const element of arrayCollage) {
    element.display();
} 
console.log(`---------------------Step No 3-------------`);
function displayCollegeDetails(colleges) {
    for (const college of colleges) {
        console.log(`======College Details for ${college.collageName}=====`);
        for (const key in college) {
            if (college.hasOwnProperty(key)) {
                console.log(`${key}: ${college[key]}`);
            }
        }
    }
}
displayCollegeDetails(arrayCollage);