class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const chai = new teacher("chai","chai@13","123")
chai.addCourse() //A new course was added by chai
chai.logMe()//Username is chai

const masalaChai = new User("mirchi")
masalaChai.logMe()//Username is mirchi

console.log(chai instanceof User);// true


// super() ka kaam kya hai?
// Jab tum class Teacher extends User likhte ho, to Teacher ke constructor ke andar this tab tak available hi nahi hota jab tak tum parent (User) ka constructor call nahi karte.


// super(username) basically ye keh raha hai:

// "Pehle User class ke constructor ko chalao, aur usse username set karne do (this.username = username)"

// Iske baad hi Teacher apna this.email aur this.password set kar sakta hai.
// Agar super() call na karo, to error aayega, kyunki child class mein this uplabdh hi nahi hoga jab tak parent constructor run nahi hota.



// instanceof check karta hai — kya ye object, us class ki chain (prototype chain) mein kahin exist karta hai?
// chai ek Teacher object hai, aur Teacher, User se extends hua hai — matlab Teacher ke andar User "chhupa hua" hai. Isliye:

// chai instanceof Teacher → true
// chai instanceof User → true (kyunki Teacher, User ka hi extended version hai)

// Lekin masalaChai instanceof Teacher → false hota, kyunki masalaChai sirf User hai, Teacher nahi.