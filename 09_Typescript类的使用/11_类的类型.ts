class Person {
  name: string = "123"
  eating() {}
}
const p = new Person()
// 类里有什么,就必须定义什么
const p2: Person = {
  name: "YD",
  eating() {
    console.log("eat")
  },
}
export {}
