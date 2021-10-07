function foo(): never {
  while (true) {}
}
//never表示永远不会有返回值
function core(message: string | number) {
  switch (typeof message) {
    case "string":
      console.log("string处理")
      break
    case "number":
      console.log("number处理")
      break
    default:
      const check: never = message
  }
}
//当有一天同事在core添加了其他类型的输入时,就回来到default 报错
//提示进行对应的代码填充,例如
// core(true)
