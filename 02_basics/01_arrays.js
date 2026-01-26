// array
//define karne ka tarika
const myArr = [0,1,2,3,4]
// important point::::JavaScript arrays are heterogeneous and can store multiple data types because arrays are objects in JavaScript.
// // matlab different data types ek saath rakh sakte ho ✅
//  example ::const myArr = [0, 1, 2, true, "hitesh"];

const myHeros = ["Shaktiman","naagraj"]
console.log(myArr[0]);//0

const myArr1 = new Array(1,2,3,4,5)

//Array methods

// myArr.push(5)
// myArr.push(6)
// console.log(myArr);//[0,1,2,3,4,5,6]
// myArr.pop()
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]

// myArr.unshift(9)
console.log(myArr); //[ 9, 0, 1, 2, 3, 4 ] isme unshift me jo bhi parameter dalege starting me aa jayega array ke
// myArr.shift()//shift me koi parameter nahi dete hai 
console.log(myArr);//[ 0, 1, 2, 3, 4 ] ye first element ko remove kar deta hai 9 hat gaya 
//mene unshift ko comment kar diya ab dekhte hai ki original array ka first element delte hota hia tya nahi
console.log(myArr);//[ 1, 2, 3, 4 ] 0 hat gya'


// ***** more operations****
console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1
console.log(myArr.indexOf(3));//3

const newArr = myArr.join()//join basically adds all the elements of an array into a string
//mtlb numbers ko string me change kar deta hai
console.log(myArr);//[ 0, 1, 2, 3, 4 ]
 console.log(newArr);//0,1,2,3,4 string me change kar diya agar iska type check karege to string aayeg join ka yahi kam hota hai

 //slice and splice

 console.log("A ",myArr);//A  [ 0, 1, 2, 3, 4 ]

 const myn1 = myArr.slice(1,3)
 console.log(myn1);//[ 1, 2 ]

 console.log("B ",myArr);//B  [ 0, 1, 2, 3, 4 ]

 const myn2 = myArr.splice(1,3)
 console.log(myn2);//[ 1, 2, 3 ] splice me range bhi include hui hai also myArr jo ki original array tha vo bhi change ho gya
 console.log("C ",myArr);//C  [ 0, 4 ]
 
 
 
 
 





