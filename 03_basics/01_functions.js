function saymyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("L");
}
//saymyName()

//add two numbers

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers(3,4)

function addTwoNumbers(number1 , number2){ //number 1 and number 2 are parameters , 3 and 5 are arguments
    let result = number1+number2
    return result
}
const result = addTwoNumbers(3,4)
console.log("Result :",result);//Result : 7
//return ke bad koi statement execute nahi hoti agar m jese uoar return ke bad ak console.log("hello") likh du to execute nahi hoga


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");//agar tum chahate ho ke agar username me kuch nahi aaya mtlb username==undefined then jo likha hai print karo and return karna jaruri hai warna isse age bhi statement execute hoga tum print karake dekh sakte ho 
        //!username we can also use or it is same as username == undefined then print please enter a username otherwise !username work same
        return
    }
    return `${username} just logged in`
}
// !username ka matlab:

// empty string ""

// undefined

// ✅ Default Parameter
// function loginUserMessage(username = "sam"){


// Agar tum kuch pass hi na karo:

// loginUserMessage()


// To username = "sam" ho jayega. mtlb agar empty pass kar rahe ho to ase bhi de sakte hai username but agar argument doge like pranjal ya koi empty string nahi ho bus to jese mene pranjal diya to sam overwrite ho jayega then pranjal hi print hoga

// console.log(loginUserMessage("Pranjal")); //Pranjal just logged in
console.log(loginUserMessage(""));

//********* */

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));//2
// ... =>rest operator
function calculateCartPrice(...num1){   //... iska use tab hota hai jese kisi website part bahut sara saman add to cart kar leta ha customer and un sab ka price ak sath dene ke liye ... ka use karte hai
    return num1
}
// console.log(calculateCartPrice(100,200,300));


// function calculateCartPrice(val1, val2, ...num1){
//    return num1
// }
// Call:

// console.log(calculateCartPrice(200,400,500,2000)) is case me because ham only num1 return kar rahe hai value 1 and 2 nahi to 200 val1 and 400 val2 ye nahi print hoge balki 500 and 2000 num 1 me jayege wahi print honge

//***function with object */

const user = {
    username : "Pranjal",
    price : 999

}
function handleObj(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`)
}
// handleObj(user) //Username is Pranjal and price is 999

//ya phir alag se obj na bankar use me desakte hai function call me
handleObj({
    username : "Pranjal",
    price: 999
}) //Username is Pranjal and price is 999  ase bhi same hi aayega


//**Jese object ko kiya hai vese hi array ki koi bhi value print kara sakte hai function ki help se// */

const myNewArray = [100,200,400,900]
//if you want to reuturn the 2nd value of array with the help of functionn

function returnSecondVakue(getArray){
    return getArray[1]
}
// console.log(returnSecondVakue(myNewArray)) //200
//OR
console.log(returnSecondVakue([100,200,400,900])) //200
