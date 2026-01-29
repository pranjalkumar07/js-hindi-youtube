//Loops
//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
}
// console.log(element); ye error dega you know the concept of scope

//Nested loop

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value: ${j} and inner loop ${i}`); // we can access i inside j loop because we know the funda of parent child can access i in j but not j outside inner loop
        
//     }
    
// }
// 1 to 10 table:::::
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i}`); // we can access i inside j loop because we know the funda of parent child can access i in j but not j outside inner loop
        // console.log(i + '*' + j + '=' + i*j); 
        
    }
    
}

let myArray = ["Flash" , "Batman" , "Thor"]
console.log(myArray.length); //3 that's why i < myArray.length 

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element); 
    
}



// break and continue

for (let index = 0; index <= 10; index++) {

    if (index == 5) {
        console.log("5 detected");
        break
    }
}
    // console.log(`value of i is : ${index}`);


 //  output // value of i is : 0
// value of i is : 1
// value of i is : 2
// value of i is : 3
// value of i is : 4
// 5 detected
    
    
for (let index = 0; index <= 10; index++) {

    if (index == 5) {
        console.log("5 detected");
        continue
    }
    console.log(`value of i is : ${index}`);
      
}
//output
// value of i is : 0
// value of i is : 1
// value of i is : 2
// value of i is : 3
// value of i is : 4
// 5 detected
// value of i is : 6
// value of i is : 7
// value of i is : 8
// value of i is : 9
// value of i is : 10

