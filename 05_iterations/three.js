// for of

// ["" , "",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(greet);
    
}

//map

const map = new Map()
map.set('IN' , "India")
map.set('UK' , "UNITED KINDOM")
map.set('FR' , "FRANCE")

// console.log(map); //Map(3) { 'IN' => 'India', 'UK' => 'UNITED KINDOM', 'FR' => 'FRANCE' }

for (const [key,value] of map) {
    // console.log(key , ':-' , value);
    
}
for (const [key] of map) {
    console.log(key);
    
}
// IN :- India
// UK :- UNITED KINDOM
// FR :- FRANCE


const myObject = {
    game1:"NFS",
    game2:"Free fire"
}
// for (const [key] of myObject) {
//     // console.log(key); ye nahi chalega
    
// }
// for (const [key,value] of myObject) {
//     console.log(key , ':-',value);// give error 
    
    
// }

// THIS WILL not executed becuase we can not iterate in object through for of
