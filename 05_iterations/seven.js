// Method chaining

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num)=> {return num + 10})

const newNums = myNumbers.map((num)=> num * 10)
                         .map((num)=> num + 1)
                         .filter( (num) => num>= 40)
console.log(newNums);
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]


// 🧠 Method Chaining

// 👉 Ek method ka output → next method ka input
// kyunki:

// map() 👉 new array return karta

// filter() 👉 new array return karta

// Isliye hum dot (.) laga ke chain bana sakte hain 🔗




// 1️⃣ map() → data ko badalna
// // 2️⃣ filter() → data ko chhantna mtlb new array return karna agar condition ko satisfy kare 