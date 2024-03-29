const num = [1,2,3,4,5]

const squaredNum = num.map(function(n){
    return n*n
})

console.log(squaredNum)

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtoDollar = 80;

let transactionInDollars = transactions.map((amount)=>{
    return (amount/inrtoDollar).toFixed(0)
})

console.log(transactionInDollars)


