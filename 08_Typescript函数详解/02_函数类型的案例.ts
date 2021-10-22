function calc(n1: number, n2: number, fn: (n1: number, n2: number) => number) {
  return fn(n1, n2)
}
function add(n1: number, n2: number) {
  return n1 + n2
}
function mul(n1: number, n2: number) {
  return n1 * n2
}
console.log(calc(1, 2, add))
console.log(calc(3, 5, mul))
