const message: "hello" = "hello"
// 字面量类型的意义,就是必须结合联合类型
type Alignment = "left" | "middle" | "right"
let align: Alignment = "left"
align = "middle"
align = "right"
