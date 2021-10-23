interface ILength {
  length: number
}
// 继承于ILength,必须要有length属性
function getLength<T extends ILength>(arg: T) {
  return arg.length
}
console.log(getLength("adsa"))
console.log(getLength([1, 2, 3, 4]))
console.log(getLength({ length: 50 }))
