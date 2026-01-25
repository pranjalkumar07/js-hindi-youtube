let myDate = new Date()
console.log(myDate); //2026-01-25T16:18:44.566Z
console.log(myDate.toString());//Sun Jan 25 2026 16:19:17 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sun Jan 25 2026
// console.log(myDate.toISOString());//2026-01-25T16:22:22.176Z
// console.log(myDate.toJSON());//2026-01-25T16:22:22.176Z
// console.log(myDate.toLocaleDateString());//1/25/2026
// console.log(myDate.toLocaleString());//1/25/2026, 4:22:22 PM

console.log(typeof myDate); //Date ka type object hota hai yaad rakhna

 let myCreatedDate = new Date(2025,0,26)
 
console.log(myCreatedDate);//isse date declare to ho gyi par konsi hui hai vo pata karna muskil hai uske liye dekhiye aage
console.log(myCreatedDate.toDateString()); // Sat Jan 25 2026 ye iska output hai and 0 mtlb jan sat isne apne hisab se ase hi de diya


// let myNewCreatedDate = new Date(2025,0,26,5,3)
// console.log(myNewCreatedDate.toLocaleString()); //1/26/2025, 5:03:00 AM

//YY/MM/DD format me
let myNewCreatedDate = new Date("2026-01-25")//ye safe way hota hai phle yy then mm then dd
console.log(myNewCreatedDate.toLocaleString());//1/25/2026, 12:00:00 AM


//Timestamps
//Timestamp = 1 Jan 1970 se ab tak ke milliseconds

let MyTimestamps = Date.now()
console.log(MyTimestamps);//Milliseconds milenge. 1970 se ab tak ke milliseconds milege 
console.log(myNewCreatedDate.getTime());//ye basically 1 jan 1970 se jo mene date di hai 2026-01-25 itne milliseconds hai

//Agar me seconds me change karna chahata hu
console.log(Date.now()/1000); // 1769360824.463 is type ka output aayega
console.log(Math.floor(Date.now()/1000));// 1769360887 ab decimal hat jayega


let newDate = new Date()
console.log(newDate) //2026-01-25T17:09:47.506Z
console.log(newDate.getMonth()); // 0 means january because abhi jan chal raha hai and isme 0 se start hoti h indexing
console.log(newDate.getDay()); // 0 because aaj sunday hai 0 sunday 1 mondayko represent karta hai




console.log(
  newDate.toLocaleString('default', { weekday: "long" })
);// sunday because aaj sunday hai heheehh..

// weekday → mujhe din chahiye

// "long" → poora naam chahiye (Saturday)
// warna "short" hota to: Sat
// localestring pura date and time deta hai as we know but hame sirf day chahiye to hi iska use karte hai
