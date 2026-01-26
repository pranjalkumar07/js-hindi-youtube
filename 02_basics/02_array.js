const marvel_heros = ["Thor","ironman","spiderman"]
const dc_heros = ["superman","flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);//[ 'Thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'Batman' ] ] 
//like if you want to access flash

// console.log(marvel_heros[3][1]);//flash 

//concat
const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)//[ 'Thor', 'ironman', 'spiderman', 'superman', 'flash', 'Batman' ] concat is better it gives individual element in array


//there is one more method 
//spread 
const allNew_heros = [...marvel_heros,...dc_heros]
console.log(allNew_heros);//[ 'Thor', 'ironman', 'spiderman', 'superman', 'flash', 'Batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_anotherArray = another_array.flat(Infinity)
console.log(real_anotherArray);
// [  1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]
// Array ke andar jo array hote hain unko nikal ke ek single array bana deta hai.

// Matlab:

// array ke andar array nahi 
// sab ek line me = ✅



console.log(Array.isArray("Pranjal")); //false Array.isArray() → check karne ke liye hota hai ki ye chiz array hai ya nahi hai
// Array.isArray("Pranjal")   //  string hai
// // output: false

// Array.isArray([1,2,3])   //  array hai
// // output: true
console.log(Array.from("Pranjal"));//Array.from() → kisi cheez ko array bana deta hai
//  [ 'P', 'r', 'a',
//   'n', 'j', 'a',
//   'l'
// ]
console.log(Array.from({name:"Pranjal"}));//[]  Kyuki normal object iterable nahi hota ❌
// JS ko samajh hi nahi aata:

// bhai is object me main kis cheez ko tod-tod ke array banau?
//mtlb js ko samjh nahi aayega key ko array banau ya value ko

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
// Array.of() kya karta hai?

// 👉 Jo values tu dega, unhi ka array bana deta hai
// Array.of() is used to create an array from the given arguments, even if there is only one numeric value, unlike new Array() which treats a single number as length.
