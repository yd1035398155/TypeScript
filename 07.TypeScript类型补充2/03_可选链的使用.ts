// 可选链是ES11(ECMAScript2020)增加的新特性 obj.property?.
// 作用:当对象的属性不存在时,会短路,直接返回undefined,如果存在,才会继续执行
type Person = {
  name: string
  friend?: {
    name: string
    age?: number
  }
  gfriend?: {
    name: string
  }
}
const p: Person = {
  name: "yangdong",
  friend: {
    name: "kobe",
  },
}

// 另一个文件
const info: Person = {
  name: "YD",
  friend: {
    name: "JL",
  },
  // gfriend: {
  //   name: "lily",
  // },
}
console.log(info.name)
// console.log(info.friend!.name)
//可选链 ?.
console.log(info.friend?.name)
console.log(info.gfriend?.name)
console.log(11)

// 可选链出现之前,可以先对属性进行判断
// if (info.friend) {
//   console.log(info.friend)
//   if (info.friend.age) {
//     console.log(info.friend.age)
//   }
// }
