

const obj = {}

console.log(obj?.person?.name)

const run = () => {
  window.name = obj?.person?.name
}

var name = "Bob", time = "today";  
console.log(`Hello ${name}, how are you ${time}?`);

run()