// Write your solution in this file!
let employee={
    name:"Sam"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let employee2={...employee}
    employee2[key]=value;
    return employee2
}
updateEmployeeWithKeyAndValue(employee2,"streetAddress","11 Broadway")
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","11 Broadway")
function deleteFromEmployeeByKey(employee, key){
    let employee2={...employee}
    delete employee2[key]
    return employee2
}
deleteFromEmployeeByKey(employee,"streetAddress")
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
destructivelyDeleteFromEmployeeByKey(employee,"name")