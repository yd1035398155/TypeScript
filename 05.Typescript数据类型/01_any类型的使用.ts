// 所有变量都为any的话,typescript 相当于 javascript
let m: any = "mess"
console.log(m)

m = 123
console.log(m)
// 甚至可以直接运行
m()
function foo(payload: any) {
  console.log(payload)
}
// js中的数组
const arr: any[] = []
export {}
