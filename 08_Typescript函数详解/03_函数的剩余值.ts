function sum(...num: number[]) {
  return num.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3))
