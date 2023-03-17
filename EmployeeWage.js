const isAbsent=0;
const isPartTime=1;
const isFullTime=2;
const partTimeHour=4;
const fullTimeHour=8;
const wagePerHour=20;

let empHours=0;

let empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck)
{
 case isPartTime: empHours=partTimeHour;
 break;
 case isFullTime: empHours=fullTimeHour;
 break;
 default: empHours;
}
let empWage=empHours*wagePerHour;
console.log(`Employee Wage:${empWage}$`);