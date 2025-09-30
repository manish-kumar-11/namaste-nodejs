const fs = require("node:fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous
fs.readFileSync("./file.txt", "utf8"); // 10 ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully"); // this will take around 200ms to 300ms
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);


// output
// Hello World
// This will execute only after file read
// Multiplication result is :  22637556228
// File Data :  This is the file data 
// Fetched Data Successfully
// setTimeout called after 5 seconds