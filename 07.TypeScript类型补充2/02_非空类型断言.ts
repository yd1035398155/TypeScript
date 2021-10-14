function foo(message?: string) {
  // if (message) {
  //   console.log(message.length)
  // }
  // !号 保证一定有值
  console.log(message!.length)
}
foo("asdasd")
foo()
