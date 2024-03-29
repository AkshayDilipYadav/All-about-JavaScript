function printFirstName(firstName , cb){
    console.log(firstName)
    cb('Rogers')
}
printFirstName('Steve', printLastName)

function printLastName(lastName){
    console.log(lastName)
}

const isEven = (n) =>{
    return n%2==0
}

let printResult = (evenFn, num) =>{
    const isNumEven = evenFn(num)
    console.log(`The Number ${num} is an Even Number ${isNumEven}`)
}

printResult(isEven, 16)
printResult(isEven, 9)