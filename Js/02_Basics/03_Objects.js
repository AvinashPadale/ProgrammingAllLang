// singleton - contructor se banega
// Object.create
// object literals - same but  different from  constructors

const mysym = Symbol("Key1")
const JsUser = {
    name : "Avinash",
    "Full Name" : "Avinash Padale",
    age : 21,
    [mysym] : "mysym1",
    location : "Pune",
    isloggedin : true,
    email: "avi@gmail.com"
} // object

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser.Full Name); //  error because of space in the key
// console.log(JsUser["Full Name"]);
// console.log(typeof JsUser[mysym]);
// JsUser.email = "avi01@gmail.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
// JsUser.email = "avi09@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js, ${this.name}`); // same object thats why this..
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



