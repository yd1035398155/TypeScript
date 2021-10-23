// type Direction = "left" | "right"
// 常量
enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}
console.log(Direction)

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
