// window.alert();  // 警告框
// document.write();  // 写到 HTML 文档
// console.log("Ahri");  // 输出到控制台
// document.getElementById().innerHTML();  // 写到 HTML 元素

// string
// number
// boolean
// object
// function
// symbol
//
// Object
// Date
// Array
//
// null
// undefined

console.log(typeof "json")
console.log(typeof 1)
console.log(typeof 1.1)
console.log(typeof false)
console.log(typeof [1, 2])
console.log(typeof { 1: 2, 3: 4 })

var person = {
  name: "Ahri", age: 13, printInfo: function () {
    console.log(this.name, this.age);
  },
};


console.log(person);
person.printInfo();

const ahri = "Ahri"
console.log(`${ahri}`);

console.log(`null 和 undefined 的值相等 ${null == undefined}`);
console.log(`null 和 undefined 的类型不相等 ${null === undefined}`);
