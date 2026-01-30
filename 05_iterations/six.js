// more on for each and filter method

// const coding = ["js",'ruby',"java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     // return item // undefined hi aayega
    
// })
// console.log(values); // undefined


// important:: forEach() kuch return nahi karta

//filter
// filter() karta kya hai?

// 👉 condition true ho → value new array me
// 👉 condition false ho → ignore

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num>4)
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter((num)=>{
//     return num>4
// } )
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]


// we can also do this using for each()
const newNums = [] 
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

// 📝 NOTES — filter()

// ✅ new array return karta hai

// ❌ original array change nahi hota

// ✅ condition mandatory

// ✅ chaining possible (filter().map())

const books = [
     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

let userBooks = books.filter((bk)=> bk.genre === 'History')
// console.log(userBooks);

// OUTPUT::
// [
//  {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

userBooks = books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre === 'History'
})
console.log(userBooks);
// OUTPUT:::

// [
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   }
// ]



// why we use let instead of const in line no. 63 why next code doesn't executed if we use const here
// 🧠 Reason (very important)
// 🔹 const ka rule:

// ❌ variable ko dobara assign nahi kar sakte

// ✅ lekin object / array ke andar ka data change kar sakte ho

// Example:
// const arr = [1,2,3]
// arr.push(4)      // ✅ allowed
// arr = [5,6]      // ❌ not allowed


// 🔍 Tumhare case me kya ho raha hai?
// let userBooks = ...
// userBooks = ...


// 👉 yaha reassignment ho rahi hai, isliye:

// let ✅

// const ❌



// 🔥 filter() EXACTLY karta kya hai?
// One-line definition:

// 👉 filter() array me se sirf wahi elements nikalta hai
// jo tumhari condition PASS kar jaate hain


// filter() DIRECTLY sirf ARRAY ke liye hi hota hai ✅

// ❌ Ye galat hai
// const name = "Pranjal"
// name.filter(...)   // ❌ ERROR

// const obj = {a:1, b:2}
// obj.filter(...)    // ❌ ERROR


// 👉 Anonymous function wo function hota hai jiska koi naam nahi hota

// 👉 Callback function wo function hota hai jo kisi aur function ko argument me diya jaata hai,
// aur baad me call hota hai