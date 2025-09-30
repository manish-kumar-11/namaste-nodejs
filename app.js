
require('./xyz')
const data = require('./data.json')
console.log(data)
//const sum = require('./sum')
// const obj = require('./calcuate/sum')

// const calculateMultiply = require('./calcuate/multiply')

const {calculateMultiply, sum} = require('./calcuate')

var a = "Namaste Nodejs"

var b = 20;
var c = 30;

console.log(b+c)
//console.log(a)
//obj.sum(b,c)
sum(b,c)
calculateMultiply(b,c)
//console.log(obj.a)
//console.log(global)

//console.log(this)  empty object in node js // pointing to windows in browser
//console.log(globalThis)

