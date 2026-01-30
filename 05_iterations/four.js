//for in
//  object ke liye for of error de rha tha now we use for in
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python"
}
for (const key in myObject) {
    // console.log(myObject[key]);// this will get all the values in object 
    
}
for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","ruby","py","java"]

for (const key in programming) {
    // console.log(programming[key]);
    
}
// output:::
// js
// ruby
// py
// java


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//    console.log(key); it doesn't give any output because of some map properties
   
// }
