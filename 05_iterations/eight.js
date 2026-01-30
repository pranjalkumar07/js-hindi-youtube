// REDUCE Method
const myNums = [1,2,3]

// using function
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`accumulator:${acc} and currentValue:${currval}`);
//     return acc + currval
    
// },0)


// using arrow function
const myTotal = myNums.reduce((acc,currval)=> acc + currval,0)
// console.log(myTotal); //6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 3999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price, 0)
console.log(priceToPay); //20996

// abhi samjho accumulator sabse first meinitial value ko leta hai jo is condition me zero hoti hai phir jo bhi return hoke value aati hai jaise acc+currval ye jo value aati hai vo fir accumulator me jati hai 


// from mdn about reduce() method
const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10



// reduce() poore array ko ghumaa ke usse “ek single value” bana deta hai


// 🧠 reduce vs map vs filter (SUPER IMPORTANT)
// Method	    Kya karta
// map	har     element ko change
// filter	    condition pe select
// reduce	    sabko jod ke ONE result




