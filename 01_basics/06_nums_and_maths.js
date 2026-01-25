const score = 400
console.log(score);//400

const balance = new Number(100)
console.log(balance);// [Number: 100]

console.log(balance.toString())
 // ye number 100 ko string me convert kar dega mtlb print 100 hi hoga magar data type string ho jayega

 //You can also check lenght 
 console.log(balance.toString().length); //3

 console.log(balance.toFixed())//100
 console.log(balance.toFixed(2)) //100.00

 const otherNumber = 23.8966
 console.log(otherNumber.toPrecision(3)); 
 //23.9 because starting ki 3 digit dekho and 4th digit jo ki 9 hai jo previous digit yanike 8 se badi hai to previous digit me +1 ho jayega otherwise same
const oneMoreNumber = 123.8966
console.log(oneMoreNumber.toPrecision(3));//124 because 3 digit tak lena hai starting se hi statrt karte hai and 4th digit joki 8 hai 3 se badi hai mtlb +1 higa 3 me isliye 4 ho gya last digit

// agar next digit 5 ya usse zyada ho → pichhla digit +1

// agar 4 ya kam ho → same rehne do

const anotherone = 1123.8966
console.log(anotherone.toPrecision(3)) //1.12e+3Ye 1.12e+3 ka matlab kya hai?

// Ye scientific notation hai.

// 🔥 Formula:
// 1.12e+3  =  1.12 × 10³
//          =  1.12 × 1000
//          =  1120


const hundreds = 1000000
console.log(hundreds.toLocaleString());//1,000,000 ye dollor ke hisab se hai
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 ye better hai use ke liye indian format me like 10lakh hazaar whatever
// Number
// ƒ Number() { [native code] }
// Number.MAX_VALUE
// 1.7976931348623157e+308
// Number.MIN_VALUE
// 5e-324
// Number.isFinite
// ƒ isFinite() { [native code] }
// Number.MAX_SAFE_INTEGER
// 9007199254740991  ye sara browser se likh ke laya hu

// **************MATHS*********//

console.log(Math) //Object [Math] {} iske andar hai ye sab kuch jo niche likha hai
console.log(Math.abs(-4)); // 4 mtlb ye sign change kar deta hai -4 ka 4 ye bas -ve ka positive sign kar dega +ve ka - sign nahi karega mtlb -4 ka 4 kar diya 4 ka -4 nahi kareg // 4 mtlb ye sign change kar deta hai -4 ka 4 ye bas -ve ka positive sign kar dega +ve ka - sign nahi karega mtlb -4 ka 4 kar diya 4 ka -4 nahi karega
console.log(Math.round(4.3));//4
console.log(Math.round(4.6));//5 as we know 5 se bada mtlb +1 ho jayega
console.log(Math.ceil(4.6));//5
console.log(Math.ceil(4.2));//5 mtlb 4 se thoda sa bhi bada hua to 5 hi dega
console.log(Math.floor(4.2));//4
console.log(Math.floor(4.8));//4 floor 4 se kitna hi point bada ho 4 hi output dega ceil ka opposite
console.log(Math.min(4,8,2,1,6));//1
console.log(Math.max(4,8,2,1,6));//8


console.log(Math.random()); // ye basically 0 and 1 ke bich me number generate karke deta hai
console.log(Math.random()*10);// ye jo hai 0 and 10 ke bich me values generate karega
// agar ham isme +1 karde to ye 1 and 9 ke bich me values generate karega
console.log((Math.random()*10)+1)//mtlb 0. something nahi dega 


console.log(Math.floor(Math.random()*10)+1)// ab ye bas sirf numbes like 3,4,5,8, is tarike se dega decimal me nahi dega

//agar question me max and min value de rakhi hai aur bol rakha hai ki sirf inhi ke bich me random value generate honi chahiye us condition me
// jese agar Math.floor(Math.random()*10 sirf ye likhe to agar number 0.1 something generate hua to floor use 0 kar dega isi 0 ko avoid karne ke liye +1 kiya hai jisse 0 na aaye
min = 10
max = 20
console.log(Math.random()*(max-min+1)); // ye mtlb 10 tak hi generate karega according to the question agar hame min and max ke bich me hi chahiye to
// to hame jese 1 add kiya hai 0 ko hatane ke liye wese hi min ko add karna padega jisse atleast minimum value jo min ki hai 10 wahi rahe tabhi to 10 se upar generate honge numbers
// floor aur use karo so that value agar jo random number generate hua hai to point ke phle wala hi answer hoga
console.log(Math.random()*(max-min+1)+min); 
console.log(Math.floor(Math.random()*(max-min+1))+min); 

//Remember ye math.random() wala concept is very important








 
 


