class Person {
  name: string = ""
  age: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log("eating")
  }
}
class Student extends Person {
  sno: number = 0
  constructor(name: string, age: number, sno: number) {
    super(name, age)
    this.sno = sno
  }
  studying() {
    console.log("studying")
  }
  //对父类方法的重写,覆盖掉
  eating() {
    //super调用父类代码
    super.eating()
    console.log("student eating")
  }
}

const stu = new Student("YD", 24, 1902)
console.log(stu)

stu.eating()

export {}
