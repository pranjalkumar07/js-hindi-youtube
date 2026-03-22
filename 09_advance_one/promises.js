const promiseOne = new Promise(function(resolve,reject){
    // Do and Async Task
    //DB Calls,cryptography,network
    setTimeout(function(){
        // console.log('Async task is Complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    // console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    // console.log("Async 2 resolved");
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"pranjal",email:"pranjalXD@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"pranjal",password:"123"})
        }
        else{
            reject("ERROR:Something went Wrong")
        }
        
    })
})
promiseFour.then((user)=>{
    // console.log(user);
    return user.username;
    
}).then((username)=>{
    // console.log(username);
    
}).catch(function(error){
    // console.log(error);
    
}).finally(()=>{
    // console.log("This promise is either resolved or reject");
    
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject("ERROR:jswent Wrong")
        }
        
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
        
    }
    
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()  // because jo data aa rhaa hai strin me aa raha hai to ise json me change karna padta hai value fetch karne ke liye
//         console.log(data);// upar wali line me await isliye lagaya hai because string se json me covert hone me time bhi lagega 
//     } catch (error) {
//         console.log("E :",error);
        
//     }
    
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})