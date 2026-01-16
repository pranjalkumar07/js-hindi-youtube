const name = "Pranjal"
const repocount = 2

// console.log(name + repocount + " value"); this is not good way
console.log(`hello my name is ${name} and my repocount is ${repocount}`)  // this is the right way

const gameName = new String("pranjaldes")
console.log(gameName[0]);//p
console.log(gameName.__proto__);//{} means object here it is not empty here it filled like {
//  0 : "p",
// 1 : "r"} ye mtlb is tarike se hai

console.log(gameName.length); //10
console.log(gameName.toUpperCase());//PRANJALDES

console.log(gameName.charAt(2));//a
console.log(gameName.indexOf('d'));//7


const newString = gameName.substring(0 , 4)
console.log(newString); //pran agar yaha 0 ki jagah -8 bhi kar do to koi farak nahi padega 

const anotherString = gameName.slice(-8,4)
console.log(anotherString);//an

const newStringone = "   Pranjal   "
console.log(newStringone);//same newStringone print ho jayegi
console.log(newStringone.trim());//sare spaces hat kar print ho jayegi


const url = "https://Pranjal.com/Pranjal%20choudhary"
console.log(url.replace('%20','-')) //https://Pranjal.com/Pranjal-choudhary

console.log(url.includes('Pranjal')); //true
console.log(url.includes('Kendrick'));//false


const againNewone = new String('Pranjal-pk-deshwal')
console.log(againNewone.split('-')); //[ 'Pranjal', 'pk', 'deshwal' ]


// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// // Expected output: true

// console.log(str1.endsWith("best", 17));
// // Expected output: true

// const str2 = "Is this a question?";

// console.log(str2.endsWith("question"));
// // Expected output: false



// const str1 = "Breaded Mushrooms";

// console.log(str1.padEnd(25, "."));
// // Expected output: "Breaded Mushrooms........"

// const str2 = "200";

// console.log(str2.padEnd(5));
// // Expected output: "200  "



// const mood = "Happy! ";

// console.log(`I feel ${mood.repeat(3)}`);
// // Expected output: "I feel Happy! Happy! Happy! "















