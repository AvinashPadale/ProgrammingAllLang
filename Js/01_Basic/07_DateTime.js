

let MyDate = new Date()
/*
console.log(MyDate); // 2024-02-15T07:18:30.485Z
console.log(MyDate.toString()); // Fri Feb 15 2024 09:18:30 GMT+0530 (India Standard Time)
console.log(MyDate.toISOString()); //  2024-02-15T06:18:30.485Z
console.log(MyDate.toDateString()); //  Fri Feb 15 2024
console.log(MyDate.toTimeString()); //  07:18:30 GMT+0530 (India Standard Time)
console.log(MyDate.toJSON());  // 2024-02-15T07:18:30.485Z
console.log(MyDate.toLocaleDateString()); //  15/02/2024
console.log(MyDate.toLocaleString()); //   15/02/2024, 07:18:30 pm
console.log(typeof MyDate);

let createdDate = new Date(2001, 8, 9) // months started  from 0 in JavaScript (0-11) (yyyy, mm, dd) only for array
console.log(createdDate.toDateString()); // Sun Sep 09 2001

let createdDate = new Date(2001, 8, 9, 5,3,4,2);// (year, month, day, hours, minutes, seconds, milliseconds)
console.log(createdDate.toLocaleString()); // 9/9/2001, 5:03:04 am

let createdDate = new Date("2001-09-09")
console.log(createdDate.toLocaleString()); // 9/9/2001, 5:30:00 am

let createdDate = new Date("09-09-2001")
console.log(createdDate.toLocaleString()); // 9/9/2001, 5:30:00 am

let createdDate = new Date("09-09-2001")
let myTimeStamp = Date.now()
console.log(myTimeStamp); // 17079826039434   ms
console.log(createdDate.getTime()); //999973800000   ms
console.log(Math.floor(Date.now()/1000)); // ms -> sec

let createdDate = new Date()
console.log(createdDate.getDate());
console.log(createdDate.getMonth());
console.log(createdDate.getDay()); // monday -  sunday 1-7
*/

let createdDate = new Date()
console.log(createdDate.toLocaleString('default',{
    weekday: "short",
}));