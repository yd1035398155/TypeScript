// T1 T2可以设置默认类型
interface IPerson<T1, T2> {
  name: T1
  age: T2
}
let p: IPerson<string, number> = {
  name: "YD",
  age: 24,
}
