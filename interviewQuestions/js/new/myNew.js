function myNew(func, ...argument) {
  const obj = {},
  obj._proto_ = func.prototype

}
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.sayName = function () {
//   console.log(this.name)
// }
// const person1 = myNew(Person, 'tom', 20)

// console.log(person1);// Person {name: "Tom", age: 20}
// person1.sayName() // 'Tom'