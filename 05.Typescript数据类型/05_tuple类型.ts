// 1.数组的弊端
// const info: any[] = ["YD", 24, 1.75]
// // name为any理性
// let name = info[0]
// console.log(name.length)
// 2.tuple元组:多种元素的组合
const info: [string, number, number] = ["YD", 24, 1.75]
let name = info[0]
console.log(name.length)
export {}
