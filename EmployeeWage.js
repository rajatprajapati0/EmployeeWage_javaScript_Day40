const isAbsent=0;
const isPartTime=1;
const isFullTime=2;
const partTimeHour=4;
const fullTimeHour=8;
const wagePerHour=20;
const numberOfWoringDays=20;
const maxHoursInMonth=100;
let totalWorkingDay=0;
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
     case isPartTime: return partTimeHour;
     
     case isFullTime: return fullTimeHour;
     
     default: return 0;
    }
}
let totalEmpHours=0;
while(totalEmpHours<=maxHoursInMonth&&totalWorkingDay<numberOfWoringDays)
{
    totalWorkingDay++;
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHours+=getWorkingHours(empCheck);
}


let empWage=totalEmpHours*wagePerHour;
console.log(`
            Total Hours  :${totalEmpHours}
            Total Day    :${totalWorkingDay}
            Employee Wage:${empWage}
            
            `);