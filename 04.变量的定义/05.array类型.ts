// 泛型入门
// 声明一个变量为数组类型,其中的子元素最好为同一种类型
const names: Array<string> = [] //不推荐,与react jsx 有冲突  <div></div>
const names2: string[] = [] //推荐,两种等价
// names.push(123)  直接报错
names.push("abc")
console.log(names)

export {}
