class Person {
  static time: string = "20:00"
  static lg() {
    console.log("this is a static methods")
  }
}
Person.lg()
console.log(Person.time)

export {}
