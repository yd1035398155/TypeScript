// point : x/y 对象类型
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}
printPoint({ x: 15, y: 16 })
printPoint({ x: 15, y: 16, z: 100 })
export {}
