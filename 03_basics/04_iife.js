// Immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB Connected`);     // DB Connected
})(); // remember one thing isme ; semicolon lagana important hai next expression ko execute karne ke liye

// (() => {
//     console.log(`DB Connected Two `);
    
// })()      // output DB Connected Two


((name) => {
    console.log(`DB Connected Two ${name} `);     // OUTPUT : DB Connected Two Pranjal 
    
})('Pranjal')



