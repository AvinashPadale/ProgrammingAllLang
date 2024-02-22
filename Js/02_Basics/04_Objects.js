// const tin = new Object() -singleton
const  tout = {}
tout.id = "A101"
tout.name = "Avinash"
tout.age=25;
// console.log(tout);

const anotherUser = {
    email : "anotheruser@gmail.com",
    fullName : {
        userName : {
            firstName : "Aviansh",
            lastName : "Padale"
        }
    }
}

// console.log(anotherUser.fullName.userName.firstName);// differnent  way of accessing object property

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"A",4:"B"}
// const obj3 = Object.assign(obj1,obj2) // value store in obj1
// console.log(obj1==obj3);
// // const obj3 = [obj1,obj2]
// const obj4 = Object.assign({},obj1,obj2)  // value store in obj4
// console.log(obj1 == obj4);
// console.log(obj4);
// const obj5 = {...obj1,...obj2}
// console.log(obj5);


// const users = [
// {
//     id : 1,
//     email : "a@gmail.com"
// },
// {
//     id : 2,
//     email : "b@gmail.com"
// },
// {
// },
// ]


// console.log(tout); //{ id: 'A101', name: 'Avinash', age: 25 }
// console.log(Object.keys(tout));//[ 'id', 'name', 'age' ]
// console.log(Object.values(tout));//[ 'A101', 'Avinash', 25 ]
// console.log(Object.entries(tout));// [ [ 'id', 'A101' ], [ 'name', 'Avinash' ], [ 'age', 25 ] ]

// console.log(tout.hasOwnProperty('age')); // true




const course = {
    courseName : "Js",
    price : "900",
    courseInstructor : "Hitesh"

}

// course.courseInstructor
// destructure of onject
const {courseInstructor : instructor} = course
console.log(instructor)


//api json
// {
//     "Name" : "Avinash",
//     "course" : "Js"
// }


[
    {},
    {},
    {}
]