// for each

const coding = ["js","python","cpp","java","ruby"]

//for each take argument as callback fn in this we doesn't write the name of fn we can iterate or access value of array////

// coding.forEach( function (val){
//     // console.log(val);
    
// })
// we can also access value inside array using arrow function 

coding.forEach( (item) => {
    // console.log(item);
    
})

// if you want to give a function name

function printme(item){
    // console.log(item);
    
}
 coding.forEach(printme)


// if you want to access index and array also
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})


//Object in array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})
// item is treated as one object and there are three object
// output:::
// javascript
// python
// java

