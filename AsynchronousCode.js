const fs = require('fs')

console.log('First Line')
/*
let f1data = fs.readFileSync('f1.txt')

console.log('File 1 Data -> ' + f1data)

let f2data = fs.readFileSync('f2.txt')

console.log('File 1 Data -> ' + f2data)
*/
fs.readFile ('f1.txt', cb1)

function cb1(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 1 data -> ' + data)
}

fs.readFile ('f2.txt', cb2)

function cb2(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 2 data -> ' + data)
}

console.log('Last Line')