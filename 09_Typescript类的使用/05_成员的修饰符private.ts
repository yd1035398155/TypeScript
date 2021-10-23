class Person {
  //public 默认值
  private name: string = ""
  setName(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
let p = new Person()
// p.name 私有属性不能直接访问
p.getName()
export {}
