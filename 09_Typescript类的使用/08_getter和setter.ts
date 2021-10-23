class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  //访问器setter / getter
  set name(newName) {
    console.log("you're change the name")
    this._name = newName
  }
  get name() {
    console.log(111)
    return this._name
  }
}
const p = new Person("why")
console.log(p)
console.log(p.name)
p.name = "coderwhy"

export {}
