function dubbleIt(num) {
    return num * 2
}
const result = dubbleIt(5)
console.log(result)

// or ai vave o array functiion kora jay 

const dubbleIt = function (num) {
    return num * 2
}
const result = dubbleIt(10)
console.log(result)

// ES6 a array function ai vave likha jay

const dubbleIt = num => num * 2
const result = dubbleIt(50)
console.log(result)

// jodi paramiter 2ta hoy tahole 

const add = (x,y) => x + y
const result2 = add(5,4)
console.log(result2)

// jodi sudu khali array functiion hoy tahole

const give5 = () => 5;
const result3 = give5();
console.log(result3) 

// or onk gula kaj korta

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff
    return result;
}
const result4 = doMath(7,5)
console.log(result4)