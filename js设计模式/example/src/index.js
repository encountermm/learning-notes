class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
const person1 = new Person('kimi')

console.log(person1.getName())
