/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // features of employee
const employeeMedet = ['medet', 'diler', 'developer', 200];
const employeesArr = [['Medet', 'diler', 'developer', 200],['Loki', 'diler', 'developer', 200],['Ahmad', 'diler', 'developer', 200]];

// create employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  // this.firstNames  = firstName;
  // this.familyNames = familyName;
  // this.titles = title;
  // this.payPerHours = payPerHour;
  // this.timeInEvents = '';
  // this.timeOutEvents = '';
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

// create employee records
function createEmployeeRecords(employees) {
  return employees.map(item => createEmployeeRecord(item));
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
  this.timeOutEvents.push({
    type: 'TimeOut',
    date,
    hour: parseInt(hour)
  });
  return this;
}


function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find(event => event.date === date);
  if (!timeInEvent) {
    return 0;
  }

  const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  if (!timeOutEvent) {
    return 0;
  }
  const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;

  return hoursWorked;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate(date);
  const payRate = this.payPerHour;
  const wages = hoursWorked * payRate;
  return wages;
}


function findEmployeeByFirstName(collection, firstNameString){
  const findedEmployee = collection.map( employee => employee.find( fname => fname === firstNameString));
  return findedEmployee;
}



console.log(findEmployeeByFirstName(employeesArr, 'Loki'))


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
    payroll += allWagesFor(employee);
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
//     return console.log(`${this.firstName} ${this.familyName} ${this.title}`)
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

