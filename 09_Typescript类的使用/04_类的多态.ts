class Animal {
  action() {
    console.log("running")
  }
}
class Dog extends Animal {
  action() {
    console.log("Dog Running")
  }
}
class Fish extends Animal {
  action() {
    console.log("Fish Swimming")
  }
}
// 多态的目的是为了使代码更加具备通用性,使用统一的接口
function doSomething(animal: Animal[]) {
  animal.forEach((item) => item.action())
}
doSomething([new Dog(), new Fish()])
