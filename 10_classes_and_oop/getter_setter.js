class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}pk` //2323pk
    }
    set password(value){
        this._password = value
    }
}
const hitesh = new user("pranjal@13234","2323")
console.log(hitesh.password);//2323
console.log(hitesh.email);//PRANJAL@13234

