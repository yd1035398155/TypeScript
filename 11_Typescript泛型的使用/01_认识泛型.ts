// 类型的参数化
// 在定义函数时,不决定参数的类型
// 而是让调用者以参数的形式告知,函数的参数应该是什么类型
// <T> == <Type>
function add<Type>(a: Type): Type {
  return a
}

// 1.调用方式一,明确的传入类型
add<number>(20)
add<{ name: string }>({ name: "YD" })
add<any[]>(["abc"])
// 2.调用方式二,类型推导
add(50)
add("string")
