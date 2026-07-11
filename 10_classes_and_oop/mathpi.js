const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// console.log(descripter);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// we can not overwrite the value of pi

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai na bani kal aaiyo");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
Object.defineProperty(chai,"name",{
    writable: false,
    enumerable : false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name")); // ab jo property true thi writable and enumerable vo false ho jayega mtlb m apni khud ki property inject kar sakte hain


// Object.defineProperty tumhe kisi existing property ke flags manually control karne deta hai. Yahan tumne name property ke liye:

// writable: false → ab chai.name = "something" karne se value change nahi hogi
// enumerable: false → ab ye property "enumerable" nahi rahegi, matlab loops mein show nahi hogi

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
//output
//         price : 250
// isAvailable : true
        
    }
}




