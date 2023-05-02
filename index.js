/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // PLAYGROUND

let src = [
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150]
]
// let employeeeees = createEmployeeRecords(src)
// let loki = findEmployeeByFirstName(employeeeees, 'Loki')
// console.log(loki.familyName)









// create employee records
function createEmployeeRecords(employees) {
  return employees.map(item => createEmployeeRecord(item));
}



// create employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  const employee = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }
  return employee;
}

function createTimeInEvent(dateStamp){
  const [date, hour] = dateStamp.split(' ');
   const timeInEvent = {
    type: "TimeIn",
    date,
    hour: parseInt(hour),
  };
  this.timeInEvents.push(timeInEvent)
  return this;
}


function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(' ');
  const timeOutEvent = {
    type: 'TimeOut',
    date,
    hour: parseInt(hour)
  };
  this.timeOutEvents.push(timeOutEvent)
  return this;
}



function hoursWorkedOnDate(dates) {
  console.log(this, 'this time in events')
  const timeInEvent = this.timeInEvents.find(event => event.date === dates);
  if (!timeInEvent) {
    return 0;
  }

  const timeOutEvent = this.timeOutEvents.find(event => event.date === dates);
  if (!timeOutEvent) {
    return 0;
  }
  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;

  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.bind(this)(date);
  const payRate = this.payPerHour;
  const wages = hoursWorked * payRate;
  return wages;
}

const employee = createEmployeeRecord(['medet', 'diler', 'developer', 20])

createTimeInEvent.call(employee, "2022-05-01")

createTimeOutEvent.call(employee, "2022-05-01")

wagesEarnedOnDate.call(employee, "2044-03-15")





function findEmployeeByFirstName(collection, firstNameString){
  const findedEmployee = collection.filter( employee => employee.firstName === firstNameString);
  return findedEmployee[0];
}


const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}


function calculatePayroll(employees) {
  let payroll = 0;
  employees.forEach(employee => {
    payroll += allWagesFor.call(employee);
  });
  return payroll;
}


// Practice area 

// const trying = {
//   firstName: 'medet',
//   familyName : 'diler',
//   title : 'developer',
//   payPerHour : 200,
//   timeIn : [],
//   info : function(){
    // return console.log(`${this.firstName} ${this.familyName} ${this.title}`)
//   }
// }

// const secondTrying = {
//   firstName: 'aybis',
//   familyName : 'diler',
//   title : 'interrior architect',
// }



// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }


// console.log(person.fullName.bind(member)())

