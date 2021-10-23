// type Direction = "left" | "right"
// 常量
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("left")
      break
    default:
      console.log("other")
  }
}
export {}
