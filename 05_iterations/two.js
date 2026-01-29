// while and do while loop
let index = 0;
// while (index<=10) {
//     console.log(`value of index is : ${index}`);
//     index = index+2
// }


let myArray = ['flash' , 'superman' , 'batman']

let arr = 0;
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++;
}
// output :::
// value is flash
// value is superman
// value is batman

// do while loop


let score = 2
do {
    // console.log(`score is ${score}`);
    score = score+1 
} while (score<=10);
// OUTPUT:::::
// score is 2
// score is 3
// score is 4
// score is 5
// score is 6
// score is 7
// score is 8
// score is 9
// score is 10
// score is 11




let scorecard = 11
do {
    console.log(`score is ${score}`);
    score = score+1 
} while (score<=10);

// output : score is 11 because even if condition is false atleast one time loop will run