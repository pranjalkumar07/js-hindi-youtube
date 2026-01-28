// var c = 300
let a = 100

if(true){
    let a = 200
    const b = 400
    console.log("inner :",a); // inner : 200
    
}
console.log(a); //100
// console.log(b); ye error dega becuase b ki value block tak hi gai globally kahi assign nahi ki b ki value
// console.log(c);//300

// //Bahar wala a = 300 → Global scope
// Andar wala a = 10 → Block scope (sirf {} ke andar valid)
// b bhi sirf block ke andar hi milega

// let and const block scoped hain {} ke bahar access nahi ho sakte agar tumne bahar define nahi kiya {} ke {} ke andar ho sakte hai


//Function Scope (Parent–Child Relation)*****************//

function one(){
    const username = "Pranjal"

    function two(){
        const website = "GOOGLE"
        console.log(username); // ye execute ho jayega because two one ko access kar sakta hai
        
    }
    // console.log(website); // ye error dega because two function one ke variable ko access kar sakta hai jo ki username hai but one function two me jo website variable hai usko access nahi kar sakta yahi parent child relation hai
    two()
    


}
one()

// ✔ two() → username use kar sakta hai
// ❌ one() → website use nahi kar sakta

//  Isko bolte hain: Lexical Scope

// nested if
if(true){
    const username = "Batu "
    if(username == "Batu "){
        const website = "youtube"
        console.log(username + website); 
        
    }
    // console.log(website); becuase const block scoped hai to use only {} ke andar hi access kar sakte hai bahar nahi same for 
    
}
// console.log(username); same reason as upper


//***********interesting****** */
//HOISTING

//NORMAL FUNCTION
console.log(addone(4)); //5

function addone(num){
    return num + 1

}

//Function expression

// console.log(addTwo(6)); yaha error aa jayegi

const addTwo = function(num){
    return num + 2
}

// // reason : dekho function ko in dono tariko se define kar sakte hai do first wala normal function to chal gya ase par jisme function ko variable me dala vo kyo nahi chala
// JAVASCIPT KA CODE DO STEPS ME WORK KARTA HAI

// ✅ Step 1: Memory me naam register karta hai

// (functions aur variables)

// ✅ Step 2: Line by line code chalata hai

// Isko hi bolte hain hoisting concept (upar uthana).

// NORMAL  function ke case me kya hota hai ki 
// 🔍 Step 1 (Memory phase):

// JS bolta hai:
// 👉 “Oh function hai, pura function memory me rakh leta hoon.”

// Matlab JS ke liye ye already ready hai.

// ▶ Step 2 (Run phase):

// Jab console.log(addone(4)) aaya
// function already memory me hai ✅
// isliye call ho gaya → output aa gaya.

// 👉 Isliye function declaration pehle bhi call ho sakta hai.

// But in case of function expression

// 🔍 Step 1 (Memory phase):

// JS dekhta hai:

// const addTwo;


// Bas variable ka naam yaad rakha,
// function ko memory me nahi dala.

// ▶ Step 2 (Run phase):

// Pehli line:

// addTwo(5)


// Par addTwo me abhi function hai hi nahi ❌
// isliye ERROR.

// Baad me function assign hota hai,
// par tab tak error aa chuka hota hai.

// 👉 Isliye function expression ko pehle call nahi kar sakte
