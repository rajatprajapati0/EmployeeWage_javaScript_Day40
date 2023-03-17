const isAbsent=0;
const isPartTime=1;
const isFullTime=2;
const partTimeHour=4;
const fullTimeHour=8;
const wagePerHour=20;

let empHours=0;

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
     case isPartTime: return partTimeHour;
     
     case isFullTime: return fullTimeHour;
     
     default: return empHours;
    }
}
let empCheck=Math.floor(Math.random()*10)%3;
empHours=getWorkingHours(empCheck)
let empWage=empHours*wagePerHour;
console.log(`Employee Wage:${empWage}$`);