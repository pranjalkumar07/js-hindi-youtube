class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

// static method kya hota hai

// logMe() — ye normal (instance) method hai. Ye har object (hitesh, iphone, etc.) ke through call ho sakta hai, kyunki ye User.prototype pe rehta hai aur har instance us prototype se connected hota hai.
// createId() — ye static method hai. Static methods sirf class ke saath directly attached hote hain, kisi bhi instance ke saath nahi.

User.createId()      // ✅ ye kaam karega
hitesh.createId()     // ❌ ye ERROR dega (function not found)

Teacher.createId()   // ✅ kaam karega (static inheritance ki wajah se, Teacher ko User se static methods bhi milte hain)
iphone.createId()    // ❌ ye bhi ERROR dega, same reason


console.log(Teacher.createId());  // ye sahi tarika hai
// ya
console.log(User.createId());