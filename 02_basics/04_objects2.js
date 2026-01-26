// const tinderUser = new Object()
// console.log(tinderUser);//{}

const tinderUser = {}
// console.log(tinderUser);//{}

tinderUser.id = "abc123"
tinderUser.name = "wakka"
tinderUser.isLoggedIn = false
// console.log(tinderUser);//{ id: 'abc123', name: 'wakka', isLoggedIn: false }


//Nested objects(object ke andar object)
const regularUser = {
    email : "Pranjal@gmail.com",
    fullname : {
        username : {
            firstname : "Pranjal",
            lastname : "Kumar"

        }
    }
}
console.log(regularUser.fullname.username);//{ firstname: 'Pranjal', lastname: 'Kumar' } mtlb apan kese bhi access kar sakte jo karna chahe . lagakar kar sakte hai
console.log(regularUser.fullname.username.firstname); //Pranjal

//OBJECTS KO MERGE KARNA
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } this is not considered as good method as you can see ye obj ke andar obj ke hi form me de rha hai

//object.assign( method)
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//Best and modern :spread operator

const obj3 = {...obj1,...obj2}
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//ARRAY OF OBJECTS

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// console.log(users[1].email)//h@gmail.com

console.log(tinderUser) 
// { id: 'abc123', name: 'wakka', isLoggedIn: false }
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ 'abc123', 'wakka', false ]
console.log(Object.entries(tinderUser));////[ [ 'id', 'abc123' ], [ 'name', 'wakka' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//true
//hasown property basically true flase deta hai ki ye key is object me exist karti hai ya nahi

//*******DESTRUCTURING */

const course = {
    coursename : "js in hindi",
    price : 999,
    courseInstructor : "Hitesh"
}
//NORMAL ACCESS
//course.courseInstructor

//Destructuring
const {courseInstructor} = course
// console.log(courseInstructor); //Hitesh

//if you want to change courseInstructor

const{courseInstructor : Instructor} = course
console.log(Instructor);//IT also give Hitesh

//JSON define karne ka tarika
// {
//     "name" : "Pranjal",
//     "courseName":"js in hindi",
//     "price" : "free"

// }
//IN JSON key always in quotes,FUNCTIONS not allowed,used in data transfer

// 👉 Ye pure JSON format hai
// 👉 Par tu ise .js file ke andar likh raha hai

// JS bolta:

// bhai ye kis variable me hai? mai kya karu is block ka? ❌

// Isliye VS Code red underline dikha raha hai (error).
// json jo hai .json file ke andar likhi jati hai


