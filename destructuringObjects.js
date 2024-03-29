let myObj = {
    name : 'Adam',
    age: 25,
    gender : 'M',
    address : {
        country : 'England',
        city : 'London'
    }
}

let {name: n,age: a,gender: g, address:{country: c}}= myObj

console.log(n)
console.log(a)
console.log(g)
console.log(c)
