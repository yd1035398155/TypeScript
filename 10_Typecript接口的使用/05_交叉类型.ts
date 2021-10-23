interface myInter1 {
  name: string
  fun1(): void
}
interface myInter2 {
  fun2(): void
}

// 此时定义的jcType是myInter1和myInter2的交叉类型，其中必须包含这两个接口中定义的属性
let jcType: myInter1 & myInter2 = {
  name: "haha",
  fun1() {},
  fun2() {},
}
