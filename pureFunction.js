// example of a impure function

var a =4
function addImpure(x){
    console.log(x+a)
a++
}

addImpure(2)
addImpure(2)
addImpure(2)

// example of a pure function
function addPure (x, a){
   return x+a
}
console.log(addPure (2,3))
console.log(addPure (4,5))
console.log(addPure (2,3))
console.log(addPure (2,3))