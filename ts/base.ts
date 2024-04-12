// TypeScript

interface Animal {
  name: string
  age: number
  printInfo(): void
}

class Person implements Animal {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  printInfo() {
    console.log(this.name, this.age)
  }
}

const person = new Person("Ahri", 13)
console.log(person)
person.printInfo()
