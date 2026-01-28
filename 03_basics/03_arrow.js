// this inside object
// this → us object ko point karta hai jo call kar raha hai
// is example me user object ko point kar raha h wahi current object hai
const user = {
    username : "Pranjal",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username} welcome to website`);
        
    }
}
user.welcomemessage()  //  Pranjal welcome to website
// agar ab m username change kar du
user.username = "Mayank"
user.welcomemessage() // Mayank welcme to website   mtlb dono execute hoge aur print honge

// 📒 NOTES:

// Object ke andar method me this = current object

// this dynamic hota hai, jo call karta hai us par depend karta hai

// Object methods me this ka use karke properties access karte hain

//********** */
// GLOBAL THIS
console.log(this);  //{}  browser me this = window object aur jo m node.js use kar raha hu usme this {} hota hai global this

//********This inside normal function */

function chai(){
   let username = "Pranjal"
    console.log(this.username); // undefined aayega because this yahan object ko point nahi kar raha basically function ke andar this reliable nahi hota hia
    
}
chai()

//This inside function expression

// const chai = function(){
//     let username = "Pranjal"
//     console.log(this.username); // undefined hi ayega
    
// }
// chai()



//******arrow function or this inside arrow function */
// yaha par this {} aata hai  
 const arrow = () =>{
    let name = "Akshit"
    console.log(this); //{}
    
 }
 arrow()
//  ❗ Arrow function ka apna this nahi hota

// Wo apne parent se this le leta hai.

// Yahan parent = global
// Node me global this = {}
// Isliye print {}





// some more on arrow function******************
// add two number using arrow function

//  const addTwo = (num1 , num2)=>{
//     return num1 + num2
//  }
//  console.log(addTwo(2,3)); //5

 // short way to write it

//  const addTwo = (num1 , num2) => num1+num2

 // IN BRACKETS
  const additionTwo = (num1 , num2) => (num1 + num2)

  // teeno same kaam karte hain
//   📒 NOTES:

// Arrow function me agar {} use kiya to return likhna padega

// Agar () use kiya to auto return hota hai              (jo hamne in brackets me use kiya hai upar)

// Short syntax React me bohot use hota hai

// *********************OBJECT RETURN KARNA ARROW FUNCTION SE
 const addTwo = (num1 , num2) => ({username : "Pranjal07"})

 console.log(addTwo(3,4)) //{ username: 'Pranjal07' }

//  📒 NOTES:

// Arrow function se object return karna ho to ({}) use karo

// {} alone likhne se return nahi hota

// React components me ye trick kaam aati hai
 
