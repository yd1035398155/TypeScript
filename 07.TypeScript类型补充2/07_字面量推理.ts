type Method = "GET" | "POST"
function request(url: string, method: Method) {}
// const options = { url: "www.baidu.com", methods: "GET" }
// 这样的话会直接报错
// request(options.url, options.methods)
//修改
type Request = {
  url: string
  methods: Method
}
// 加 as const 使得对象属性不可修改,字面量推理
// const options= { url: "www.baidu.com", methods: "GET" } as const
// 推荐
const options: Request = { url: "www.baidu.com", methods: "GET" }
request(options.url, options.methods as Method)
export {}
