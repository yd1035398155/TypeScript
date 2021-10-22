//1.typeof的类型缩小
type IDtype = string | number
function printID(id: IDtype) {
  if (typeof id === "string") {
    console.log(id.toLocaleUpperCase())
  } else {
    console.log(id)
  }
}
//2.平等的类型缩小 ==,===,!==,!=,switch
type Direction = "left" | "right"
function printDirection(direction: Direction) {
  // if (direction == "left") {
  //   console.log(direction) //缩小为left
  // }
  switch (direction) {
    case "left":
      console.log(direction)
      break
    default:
      console.log(direction)
      break
  }
}
//3.instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time)
  }
}
class Student {
  studing() {}
}
class Teacher {
  teaching() {}
}
function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studing()
  } else {
    p.teaching()
  }
}
//4.in
type Fish = {
  swimming: () => void //函数类型,并且没有返回值
}
type Dog = {
  running: () => void //函数类型,并且没有返回值
}
const fish: Fish = {
  swimming() {
    console.log("游泳")
  },
}
function walk(animal: Fish | Dog) {
  if ("swimming" in animal) {
    animal.swimming()
  }
}
walk(fish)
export {}
