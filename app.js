// Traditional Function
// const sayHello = function(){
//   console.log('Hello')
// }

// Arrow Function
// const sayHello = () => {
//   console.log('Hello')
// }

// Compact Arrow Function - one line function does not need braces
// const sayHello = () => console.log('Hello')

// One line returns
// const sayHello = () => 'Hello'

// Must wrap obj in parentheses or it will be read as a function
// const sayHello = () => ({ msg: 'Hello' })

// Single param doesn't need ()
// const sayHello = name => console.log(`Hello ${name}`)

// multiple params need ()
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)

// sayHello('Peter', 'Chris')

const users = ['Jacob', 'James', 'Ben']

// const nameLengths = users.map(function(name) {
//   return name.length
// })

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length
// })

// Shortest
const nameLengths = users.map(name => name.length)

console.log(nameLengths)