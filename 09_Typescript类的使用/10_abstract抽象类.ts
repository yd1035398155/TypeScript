function makeArea(shape: Shape) {
  return shape.getArea()
}
//抽象方法必须在抽象类中
abstract class Shape {
  abstract getArea()
}
// 继承抽象类后,必须实现抽象方法的定义
class Rectangle extends Shape {
  private width: number
  private height: number
  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}
class Circle extends Shape {
  private r: number
  constructor(r: number) {
    super()
    this.r = r
  }
  getArea() {
    return this.r * this.r * 3.14
  }
}
const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)
console.log(makeArea(rectangle))
console.log(makeArea(circle))
