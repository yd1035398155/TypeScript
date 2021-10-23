// T : Type的缩写,类型
// K,V: key value的缩写,键值对
// E: Element的缩写,元素
// O: Object,对象
function foo<T, S, O>(a: T, b: S, c: O, ...args: T[]) {
  console.log(a)
  console.log(b)
  console.log(args)
}
foo<number, string, boolean>(10, "YD", false, 1, 2, 3, 4, 5)
