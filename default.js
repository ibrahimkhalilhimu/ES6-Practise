function add(num1, num2) {
    return num1 + num2
}
const total = add(15,17)
console.log(total)

// jodi 17 dita vula jay tahole aga nicar 2 vave korto

function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0
    }
    return num1 + num2
}
const total = add(15)
console.log(total)

// or

function add(num1, num2) {
   num2 = num2 || 0
    return num1 + num2
}
const total = add(15)
console.log(total)


// ES6 a aita kora 


function add(num1, num2 = 0) {
    return num1 + num2
}
const total =add(12)
console.log(total)