// truthy.js // truthy values vo hoti hai jinhe true assume kar liya jata hai and falsy values vo hoti hai jinhe false assume kar liya jata hai
const useremail = "h@pranjal.ai"
// yaha assume kar liya ke usermail true hai mtlb exist karti hai agar empty string hoti "" like this use false assume karte then else execute hota 
if (useremail) {
    console.log("Got user email"); // output: Got user email
    
} else {
    console.log("don't have user email");
    
    
}

// falsy value : mtlb kinhe kinhe false assume kiya jata hai
// false , 0 ,-0 , BigInt 0n, "" , null , undefined , NaN 

//truthy values
// "0" , "false" , " " , [](empty array),{}(object empty) , function(){} these all are truthy value

// if you want to check wheather an Array is empty or not
const usermail = []
if (usermail.length === 0) {
    console.log("Array is empty");
    
    
}
// if you want to check wheather object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { //Object.keys(emptyObj) itne likhke ye array me change ho jata hai and then .length 
    console.log("object is empty"); 
    
    
}

//***********Some important stuff******** */
// false = 0
// true

// false == ''
// true

// 0 == ''
// true

// Nullish coalesing operator (??): null  undefined

let val1;
// val1 = 5 ?? 10  // print karne par phli value 5 aajayegi 
// val1 = null ?? 10 // 10 yaha par agar null ho to dusri value mtlb 10 aayegi

// val1 = undefined ?? 15 // 15 

val1 = null ?? 10 ?? 20 // 10

console.log(val1);

// Terniary operator

// condition ? true : false 
 
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less thn 80") :  console.log("more than  80"); // leass thn 80



