// 一个参数是可选类型的时候,它类似于 类型|undifined 的联合类型
// function foo(message?: string) {}
// foo()

function foo(message: string | undefined) {}
foo(undefined)

export {}
