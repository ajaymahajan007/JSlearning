console.log(`===============no1================`);
function maleMarriageEligibility(gender,age,boyName) {
    let result=gender=age>=21?'Eligible For Marrige':'Not Eligible For Marriage'
    console.log(`'${boyName}' you are ${result}`);
}maleMarriageEligibility('male',25,'billagates')
maleMarriageEligibility('male',17,'stewjobs')

console.log(`===============no2================`);
function  FemaleMarriageEligibilit(gender,age,girlNam) {
    let FemaleGirl=gender=age>=21?'Eligible For Marrige':'Not Eligible For Marriage'
    console.log(`'${girlNam}' you are ${FemaleGirl}`);
}FemaleMarriageEligibilit("female",16,"jenifier");
FemaleMarriageEligibilit("female",27,"Malinda Gates")