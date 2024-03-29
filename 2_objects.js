var person = {
    firstName : 'Adam',
    secondName : 'Smith',
    age: 25,
    ownsCar : false
}

console.log(person)

console.log(person.age)

console.log(person['firstName'])

var cap = {
firstName : 'Steve',
lastName : 'Rogers',
age : 102,
friends : ['Bucky Barnes' , 'Bruce Banner' , 'Tony Stark'],

isAvenger : true,
address : {
    state : 'New York',
    city: {
        name : 'Brooklyn',
        pincode : '123456'
    }
}
}

console.log(cap.friends[1])

console.log(cap.address.city.name)

cap.isAvenger = false

console.log(cap)

cap.movies = ['age of ultron', 'civil war', 'first avenger']

console.log(cap)

delete cap.age

console.log(cap)
