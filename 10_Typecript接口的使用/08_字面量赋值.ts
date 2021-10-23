interface IPerson {
  name: string
  age: number
  height: number
}
// const info: IPerson = {
//   name: "YD",
//   age: 18,
//   height: 175,
//   score: 396,
// }
const info = {
  name: "YD",
  age: 18,
  height: 175,
  score: 396,
}
// freshness类型检测擦除,会去除掉多余的score属性
// 意义:更加灵活,不用删除多余属性
const p: IPerson = info
console.log(p)
