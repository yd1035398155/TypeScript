class Person {
  //protected:在类内部和子类中可以访问,实例不能访问
  protected name: string = "YD"
}
class Student extends Person {
  getName() {
    return this.name
  }
}
let p = new Student()
console.log(p.getName())

// p.name 私有属性不能直接访问
