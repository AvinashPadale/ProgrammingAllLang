/*
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value 
they hold at runtime and can change throughout the program as we assign different values to them
*/

/*
Primitive :
7 types : string, number, boolean, null, undefined, symbol, bigint.

Reference (Non primitive):
3 type : array, objects, functions
*/
/*
const score = 100  // number
const scoreValue = 100.3 // number
const isLogged = false  // boolean
const outsideTemp = null // object
let userEmail; //undefined
const id = Symbol('123') // symbol
const anothorid = Symbol('123')  // symbol
const bigNum = 9856456456456456456n //big numbers in js

const heros = ["avi", "shub", "avia"]; // object
let myobj = {   //object
    name:"Avi",
    age:22,
}
const myFun = function(){  //function
    console.log("Hello");
}

console.log(typeof heros);
//const score: number = 100 typeScript
*/

/* ------------------ Memory ---------------- */
//stack (primitive) , heap (non-primitive)
/* ---------- Value vs Reference Type -------- */
//value types are stored on stack memory
//reference types are stored on heap memory
/*
let myName = "Avinash"
let yourName = myName
yourName = "padale"
console.log(yourName, myName);
*/
/*
let user1 = {
    email : "user1@gmail.com",
    upi : "user1@ybl"
}
let user2 = user1
user2.email = "User2@gmail.com"
console.log(user1.email, user2.email);
*/
