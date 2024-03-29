// sum of every element in a array

// imperative way
let num = [1,2,3,4,10]

let sum =0

for (let i=0; i<num.length; i++){
    sum = sum+num[i]
}
console.log('imperative function'+sum)

// reduce
let num1 = [1,2,3,4,10]

let result = num1.reduce(function(acc, value){
let updatedSum = acc+value
return updatedSum
}, 0 )

console.log('reduce function'+result)

let product = num1.reduce(function(acc, value){
    let updatedProduct = acc*value
    return updatedProduct
    }, 1 )

    console.log('reduce function product'+product)