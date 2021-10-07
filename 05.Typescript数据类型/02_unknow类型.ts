function a() {
  return 123
}
function b() {
  return "123"
}
let flag = true
let result: unknown
if (flag) {
  result = a()
} else {
  result = b()
}
console.log(result)
// let res: string = result

export {}
// unknown类型只能赋值给any和unknown类型
// any可以赋值给任意类型
// unknown类型能在赋值后不会被乱用
