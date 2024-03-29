//check for even in an array

let num = [1,2,20,35,12,17,46]

let evenNum = num.filter(function(n){
    return n%2==0
})

console.log(evenNum)

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const depositedAmount = transactions.filter(function(amount){
    return amount >0
})

console.log(depositedAmount)