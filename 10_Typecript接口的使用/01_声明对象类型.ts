// 通过类型(type)别名来声明对象类型
// type Infotype = { name: string; age: number }

// 另一种声明对象类型的方式 接口interface
// 在开头加上I表示是接口,有些公司的行业规范
interface IInfotype {
  name: string
  age: number
  friend?: {
    name: string
  }
}
const info: IInfotype = {
  name: "s",
  age: 18,
}
console.log(info.friend?.name)
