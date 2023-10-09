console.log(`=====1.Crate the Obeject is "banksbi"======= `);
let banksbi={
    name:"State Bank Of India",
    branch:"Karad",
    iFSCCode:"SBIN0000403",
    contact:18001234,
};console.log(banksbi);
console.log(`=====2.Crate the Obeject is "bankLocation"======= `);
let backLocation={
    Street:"Satara",
    city:"karad",
    pin:415539,
};console.log(backLocation);
console.log(`=====3.Clone the Object "banksbi","banklocation"======= `);
const bankclone=Object.assign(banksbi,backLocation)
console.table(bankclone);
console.log(`=====4.Crate the Obeject is "rateOfIntreset"======= `);
let rateOfIntreset={
    homeloanIntrest:8.40,
    personalLoanIntreset:11,
    dueIntrest:43.8
};
console.log(rateOfIntreset);
console.log(`=====5.Merge the Obeject is 'banklocation','interstloan' into "sbiBank"======= `);
console.table(Object.assign(banksbi,backLocation,rateOfIntreset));
console.log(`==========6.Traverse Array"============ `);
for (const key in banksbi) {
console.log(key,banksbi[key]);    
}