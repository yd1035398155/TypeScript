class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  info() {
    console.log(this.name + " age is " + this.age)
  }
}
let p = new Person("YD", 24)
p.info()
export {}
