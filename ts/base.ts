class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const person = new Person("Ahri", 13)
console.log(person)
