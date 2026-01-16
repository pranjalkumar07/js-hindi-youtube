// DATA KIS TRAKIKE SE STORE HOTA HAI MEMORY ME AUR KIS TARIKE SE DATA KO ACCESS KAR SAKTE HO ISE KE HISAB SE categourize kiya jata hai data ko primitive aur non primitive me
//Primitive

//7 Types : String , Number , boolean , null , undefined , symbol , bigInt

const Score = 100
const ScoreValue = 100.5

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const AnotheId = Symbol('123')

// console.log(Id == AnotheId); // false

const BigNumber = 34353535365343343n
// console.log(typeof BigNumber); //iska type aayega bigInt


//Reference(non-Primitive)
// Arrays , objects , functions

const heros = ["shaktiman","doga","naagraj"];// arrays ko defined karne ka tarika
let myObj = {
    name : "Pranjal",
    age : 18,
} //objects ko define karne ka tarika hai ye ham ise key value me define karte hai koi bhi data type aa sakta hai isem for exmple pranjal string hai aur 18 number hai

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof AnotheId); // symbol
console.log(typeof heros); // Object
console.log(typeof myFunction); // function ya object function keh lo
console.log(typeof outsideTemp); // object because null ka data type object hota hai
console.log(typeof userEmail); //undefined
console.log(typeof IsLoggedIn); // boolean
console.log(typeof ScoreValue); // number yaha decimal se koi fark nahi padt hai 
console.log(typeof myObj); // object 
//notice one thing that non primitive ka sabka object hi aata hai


//QUESTION: is javascript statically typed aur dynamically typed?
//Answer : JavaScript dynamically typed language hai ✅
// Statically typed nahi hai ❌

// Matlab kya hua?

// JavaScript me variable ka type pehle se define nahi karna padta, aur runtime par change bhi ho sakta hai.

// Example 👇
// let x = 10;      // number
// x = "hello";    // string
// x = true;       // boolean


// 👉 Yahan same variable x ka type baar-baar change ho gaya — isi liye dynamic typing.

// Statically typed (C, C++, Java)

// int x = 10;
// x = "hello";   // ❌ error


// Dynamically typed (JavaScript, Python)

// let x = 10;
// x = "hello";   // ✅ allowed


// +++++++++++++++++++++++

// Stack(Primitive) , Heap(Non primitive)

// stack ke ander koi bhi chij lenge to uska copy hi milta hai variable ka EXAMPLE

let MybrotherName = "Ayush"

let anotherName = MybrotherName
anotherName = "Nidhi"
console.log(anotherName); //Nidhi
console.log(MybrotherName); //Ayush you see yaha another name me 2nd line me ayush value copy hui hai actual value nahi gayi hai that's why jab mybrothername print kiya to ayush hi aaya vo change nahi hua

//HEAP KE ANDER KOI BHI VALUE Rakhte hai to uska reference milta hai mtlb actual value aa ti hai

let userone = {
    email:"pranjal12@gmail.com",
    upiID : "hey@ybl"
}
let userTwo = userone
userTwo.email = "vikrantveer123@gmail.com"
console.log(userone);//'vikrantveer123@gmail.com', upiID: 'hey@ybl'
console.log(userTwo);//'vikrantveer123@gmail.com', upiID: 'hey@ybl'


