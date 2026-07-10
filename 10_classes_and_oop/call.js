function setUsername(username){
    //complex db calls
    this.username=username
    console.log("called");
    
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email;
    this.password = password
}
const chai = new createUser("chai","chai@fb.com","234")
console.log(chai);
//new keyword ka kaam hai ek naya object banake usse function ke andar bind kar dena, taaki this us naye object ko refer kare.

// JS engine internally 4 kaam karta hai:

// Naya empty object banata hai — {}
// Us object ka __proto__ set karta hai createUser.prototype pe (isliye inheritance/methods kaam karte hain)
// createUser function ko call karta hai, aur uske andar this ko us naye object se bind kar deta hai
// Agar function khud kuch object return nahi kar raha, to woh naya object automatically return ho jata hai




// Agar tum sirf setUsername(username) likhte (bina .call() ke), to us function ke andar this kya hoga? — Woh createUser ke this se connect nahi hoga. this uska apna context uthayega (global object ya undefined), matlab this.username = username galat jagah set ho jata — createUser wale object pe nahi.

// Isliye this pass kiya:

// Jab createUser("chai", "chai@fb.com", "234") ko new ke saath call kiya jata hai, JS ek naya object banata hai aur createUser ke andar this = us naye object ko point karta hai.

// Ab jab tum likhte ho:

// js
// setUsername.call(this, username)
// Iska matlab: "Hey setUsername, tu chal, lekin apna this mat use kar — mera wala this (jo createUser ka naya object hai) use kar."


// .call() ek method hai jo har function ke paas available hota hai (kyunki functions bhi objects hote hain, aur unhe Function.prototype se .call(), .apply(), .bind() milte hain).
// .call() ka kaam: kisi function ko turant invoke (run) karna, aur uske this ko manually specify karna.