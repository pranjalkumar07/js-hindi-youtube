const accountId = 14456
let accountEmail = "pranjal@gmail.com"
var accoundPassword = "12345"
accoundCity = "Jaipur"

//accountId = 2 // not allowed because const se defined h mtlb constant hai to change nahi ho sakti baki ho sakti h
accoundEmail = "pkkk@google.com"
accountPassword = "23322323"
accountCity = "Benguluru"

console.log(accountId);

// Prefer not to use var
// because of issue in block scope and functional scope


console.table([accountId,accountEmail,accountPassword,accountCity])
