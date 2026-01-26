//Singleton : singleton ka matlb sirf ak hi object ka instace 
//JS me jab constructor se object banta hai tab singleton hota hai.
//object.create

//object literals : ye singleton nahi hota ye ham abhi jo use karege aage 

const mySym = Symbol("Key1")

const jsUser = {
    name : "Pranjal",//key string me hi hoti hai ise likh ase dete hai normal ise . ka use karke ya [] ka use karke access kar lete hain
    "Full Name":"Pranjal Kumar",//ISPAR DHYAN DENA REVISION TIME ME JYADA //Yaha seen ye hai ki jo key hai use ham dot(.) ka use karke nahi access kar sakte uske liye ["Full Name"] ase hi access karna padega 
    age : 18,
    [mySym]: "mykey1",//Agar tu aise likhe:// mySym: "mykey1"   // ❌ galat // to ye string ban jaata "mySym". //Symbol ko key banana ho to [ ] compulsory.
    location: "Jaipur",
    email: "Pranjal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsUser.email);//Pranjal@google.com
//another way i.e better slightly
console.log(jsUser["email"]);//Pranjal@google.com
console.log(jsUser["Full Name"]);//Pranjal Kumar
console.log(jsUser[mySym]);//mykey1  agar console.log(jsUser) karege to [Symbol(key1)]: 'mykey1' aayega


jsUser.email = "Pranjal@instagram.com"
// Object.freeze(jsUser)//Freeze makes object immutable (no change allowed). jo next line me email ko change karne ke liye likha hai vo execute nahi hoga freeze ka use karne ke bad immutable ho jayega
jsUser.email = "Pranjal@facebook.com"
console.log(jsUser);




jsUser.greeting = function(){
    console.log("Pranjal");//Pranjal
}

jsUser.greeting(); // yaha par undefined print nahi hoga

jsUser.greetingTwo = function(){
    console.log(`Hello jS user, ${this.name}`);//Hello js user , Pranjal
    //
}

 console.log(jsUser.greetingTwo()); //sath me undefined bhi print ho raha hai because ak console.log bahar bhi use kiya hai jo undefined dega becuse jab function return kaarta hai to use print karne ke liye console.log ka use karte hai but abhi return nahi kar raha vese console.log ki jarurat nahi hi apar use kar liya normal call bhi kar sakte hai jisse undefined sath me print nahi hoga



 //WHY WE USE THIS 
 //  this keyword current object ko refer karta hai
// Matlab jis object ne function call kiya, this usi ko point karta hai

//This jaruri hai because AGr ham ase likhe:
//console.log(name); //  error / undefined
// kyunki name global variable nahi hai,
// wo object ke andar hai.

// Isliye likhte hain:
// this.name  // ✔️ object se value lene ke liye

// ===>>> this depends on who calls the function
// const user1 = {
//   name: "Aman",
//   greet: function(){
//     console.log(this.name);
//   }
// }

// const user2 = {
//   name: "Pranjal",
//   greet: function(){
//     console.log(this.name);
//   }
// }

// user1.greet(); // Aman
// user2.greet(); // Pranjal
