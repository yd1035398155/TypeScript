// 除了重复定义外,其他地方大同小异,根据个人爱好选择type 或者 interface
// 1 interface重复定义会合并
interface IFoo {
  name: string
}
interface IFoo {
  age: number
}
// 接口可重复
const a: IFoo = {
  name: "",
  age: 0,
}
// 2
interface Window {
  age: number
}
window.age = 18

// 3 type不能重复定义
// type IToo = {
//   name: string
// }
// type IToo = {
//   age: number
// }
