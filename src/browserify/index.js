const a = require('./a')
const b = require('./b')


console.log(a)
console.log(b)

const c = a.name + b.name

console.log(c)
module.exports = c