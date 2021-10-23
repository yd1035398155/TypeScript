// type CalcFn = (n1: number, n2: number) => number
interface CalcFn {
  (a: number, b: number): number
}

const add: CalcFn = (a, b) => a + b
console.log(add(10, 5))
export {}
