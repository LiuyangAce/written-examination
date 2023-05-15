function a (habit) {
  this.name = 'a name'

  return {
    habit
  }
}
a.prototype.age = 12
let obj = new a(123)

console.log(obj.name);
console.log(obj.age);
console.log(obj.habit);
// 如果构造函数返回一个对象那么结果如下
// undefined
// undefined
// 123

// console.log(obj.__proto__);