let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "I", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"}

]

let males = arr.filter(function(obj){
    return obj.gender == 'M'
})

let ageOfMales = males.map(function(male){
    return male.age
})



console.log(males)
console.log(ageOfMales)