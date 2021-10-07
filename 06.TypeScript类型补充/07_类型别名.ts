type UnionType = string | number | boolean
type PointType = {
  x: number
  y: number
  z: number
}
function foo(args: UnionType) {}
function bar(point: PointType) {}
export {}
