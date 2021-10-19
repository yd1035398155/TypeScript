let message: string | null = null
// let message: string | null = "message"
const content = message ?? "你好"
// 相当于
// const content = message?message:"你好"
console.log(content)

export {}
