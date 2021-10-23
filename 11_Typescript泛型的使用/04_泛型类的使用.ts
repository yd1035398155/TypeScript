class Point<T> {
  x: T
  y: T
  z: T
  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}
const p = new Point<number>(1, 2, 3)
const p1 = new Point<string>("a", "b", "c")
//
const name: string[] = ["a", "c"]
const name1: Array<string> = ["a", "c"] //不推荐(react jsx中会使用<>)
export {}
