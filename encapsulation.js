function Person(_name, _age){
    this.name= _name
    this.age = _age
}

let Person1 = new Person("Adam", 25)

Person1.name = 'Steve'

console.log(Person1)