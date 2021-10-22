// 1.函数作为参数时,参数如何编写类型
type Footype = () => void // 当返回值是void时,任何类型都是可以的
function foo() {}
function bar(fn: Footype) {}

// 2.定义常量时,变量的类型
type Addtype = (num1: number, num2: number) => number
const add: Addtype = (num1, num2) => {
  return num1 + num2
}
console.log(add(10, 15))
export {}
