const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let result = transactions.some(function(n){
    return n>0
})

console.log(result)

let resultEvery = transactions.every(function(n){
    return n>0
})
console.log(resultEvery)
