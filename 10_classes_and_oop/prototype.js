// let myName = "Pranjal"
// console.log(myName.length);//7

let myName = "pranjal     "

// console.log(myName.trim().length);//7
// console.log(myName.trueLength);// ye to undefined aaya

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.pranjal = function(){
    console.log(`pranjal is prezent in all objects`);
    
}
Array.prototype.heyPranjal = function(){
    console.log(`say hii to pranjal`);
    
}

// heroPower.pranjal()//pranjal is prezent in all objects
// heroPower.getSpiderPower()//Spidy power is sling
// myHeros.pranjal()// pranjal is prezent in all objects

// myHeros.heyPranjal()//say hii to pranjal


// Inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;// teacher ne user ki property inherit kar li

// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher) // teachingSupport ne teacher ki property inherit kar li

let anotherUserName = "pranjalKumar     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lengtgh is : ${this.trim().length}`);
}
anotherUserName.trueLength()
//pranjalKumar     
// True lengtgh is : 12
"hitesh".trueLength()// ye bhai same jese upar hua vese hi ho jayega 
// hitesh
// True lengtgh is : 6
"vidhanshu".trueLength()
// vidhanshu
// True lengtgh is : 9