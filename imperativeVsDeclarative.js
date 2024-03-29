//Imperative Code
const a =4

const aSquared = a*a

let isEven;

if (aSquared %2 ==0){
    isEven = true
}
else {
    isEven = false
}

console.log(isEven)

// Declarative Code

const checkForSquare = (x)=>(x*x%2 ===0 ? true:false)
console.log(checkForSquare(4))
console.log(checkForSquare(5))
