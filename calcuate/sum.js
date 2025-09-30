
// Modules protects their varibale and functions from leaking

console.log("Sum module is loaded");

var x = "Hello"

function sum(a,b){
    const sum = a+b
    console.log("Sum is ",sum)
}


//module.exports = sum

module.exports={a:x, sum:sum}  // exporting multiple values as object