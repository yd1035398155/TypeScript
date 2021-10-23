class Person {
  // 只读属性可以在constructor内赋值,赋值后不可更改
  readonly name: string
  readonly obj: object
  constructor(name: string, obj: Object) {
    this.name = name
    this.obj = obj
  }
}
const p = new Person("YD", { age: 118, number: 20 })
console.log(p)
// p.obj.number = 19
//p.name = "coderwhy"
export {}
