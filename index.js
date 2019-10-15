/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
///////////////////////////////////////////////
function createEmployeeRecord(arr){
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour:arr[3],
    timeInEvents:[],
    timeOutEvents:[]
  };
}
function createEmployees(arrOfArr){
   return arrOfArr.map(e=>createEmployeeRecord(e))
}
function createTimeInEvent(dateStamp){
     let [date, hour] = dateStamp.split(' ');
     this.timeInEvents.push({
       type: "TimeIn",
       hour:parseInt(hour,10),date
     }) 
     return this
}
function createTimeOutEvent(dateStamp){
     let [date, hour] = dateStamp.split(' ');
     this.timeOutEvents.push({
       type: "TimeOut",
       hour:parseInt(hour,10),date
     }) 
     return this
}
function hoursWorkedOnDate (time){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === time
    })
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === time
    })
    return (outEvent.hour - inEvent.hour) / 100
}
function wagesEarnedOnDate(time){
  return parseFloat((hoursWorkedOnDate.call(this,time)*this.payPerHour).toString())
}

function calculatePayroll(employeeRecords){
   return employeeRecords.reduce(function(a,c){
        return a + allWagesFor.call(c)
    }, 0)
}
function createEmployeeRecords(record){
   return record.map(input=>createEmployeeRecord(input))
}
function findEmployeebyFirstName(employeeRecords,firstName){
  return employeeRecords.find(e=>e.firstName===firstName)
}