// as 作用 把宽泛的类型转换为具体的类型
// 1
// <img id="why" />
// const el = document.getElementById("why") as HTMLImageElement

// 2
// class Person {}
// class Student extends Person {
//   study() {
//     console.log("studying")
//   }
// }
// function sayHello(p: Person) {
//   ;(p as Student).study()
// }
// const stu = new Student()
// sayHello(stu)

// 3 了解 不推荐
const message = "abc"
const res: number = message as any as number
export {}
