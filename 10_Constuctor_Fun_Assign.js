console.log(`----------------------------NO 1---------------------`);
function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
        this.location = location;
        this.ifscCode = ifscCode;
        this.branchCode = branchCode;
}
const yesBank=new Bank("YES Bank","Ahmadnagar","MAHB0000931","110059");
const sbiBank=new Bank("SBI Bank","Karad","SBIN0000403","000403");
const mahiBank=new Bank("Mahi Bank","Marunji","KKBK0001769","001800");
const axisBank=new Bank("Axis Bank","Kolhapur","UTIB0000103 ","413211452");
console.log(`YES Bank Detail is:Name-${yesBank.bankName},Location-${yesBank.location},IFSC Code-${yesBank.ifscCode},Branch Code-${yesBank.branchCode}`);
console.log(`SBI Bank Detail is:Name-${sbiBank.bankName},Location-${sbiBank.location},IFSC Code-${sbiBank.ifscCode},Branch Code-${sbiBank.branchCode}`);
console.log(`Mahi Bank Detail is:Name-${mahiBank.bankName},Location-${mahiBank.location},IFSC Code-${mahiBank.ifscCode},Branch Code-${mahiBank.branchCode}`);
console.log(`Axix Bank Detail is:Name-${axisBank.bankName},Location-${axisBank.location},IFSC Code-${axisBank.ifscCode},Branch Code-${axisBank.branchCode}`);
console.log(`----------------------------NO 3---------------------`);
const opTime=Bank.prototype.openTime="9 am IST";
const ceTime=Bank.prototype.closeTime="6 pm IST";
console.log(`Please Visit Our ${sbiBank.bankName} Open time is: ${opTime} and, close time is ${ceTime}`);
console.log(`Please Visit Our ${axisBank.bankName} Open time is: ${opTime} and, close time is ${ceTime}`);
console.log(`Please Visit Our ${yesBank.bankName} And its Branch code is: ${yesBank.branchCode} and ,Open Time is: ${opTime}`);