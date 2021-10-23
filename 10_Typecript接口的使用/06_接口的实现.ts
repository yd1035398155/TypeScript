interface ISwim {
  swimming: () => void
}
interface IEat {
  eating: () => void
}
class Animal {}
// 继承:只能实现单继承
// 实现:可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("sw")
  }
  eating() {
    console.log("et")
  }
}
// 编写一些公共的API, 面向接口编程
function swimAction(swimable: ISwim) {
  swimable.swimming()
}
// 所有实现了接口的类对应的对象,都可以传入
swimAction(new Fish())
swimAction({
  swimming: () => {
    console.log("fish sw")
  },
})
