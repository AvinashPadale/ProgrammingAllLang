const accId = 10
let accEmail = "avi@gmail.com"
var accPass = "12345"
accAddress = "Pune"
let accState;
// accId = 2 // Not allowed for const variable
//console.log(accId);

accEmail = "ap@gmail.com"
accPass = "4321"
accAddress = "Mumbai"

console.table([accId, accEmail, accPass, accAddress, accState])
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

