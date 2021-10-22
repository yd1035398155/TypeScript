// 函数名称相同,但是参数不同的几个函数,就是函数重载
// 重载声明
function add(n1: number, n2: number): number
function add(n1: string, n2: string): string
// 重载实现
function add(n1: any, n2: any): any {
  return n1 + n2
}
// 不能直接调用重载实现,必须匹配重载声明
// const res = add(1, "v")
export {}
