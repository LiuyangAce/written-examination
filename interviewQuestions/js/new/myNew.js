function objectFactory() {
  let obj = new Object()

  let Constructor = [].shift.call(arguments)

  obj.__proto__ = Constructor.prototype
  let result = Constructor.call(obj,arguments)

  return typeof result === 'object' ? result : obj
}

function a (habit) {
  this.name = 'a name'

    return {
      habit
    }
  // 在new中还有一个特性 如果构造函数返回了一个对象，
  // 在实例 obj 中只能访问返回的对象中的属性。
  // 如果是返回 标准数据类型 等于没返回 见new2.js的例子

  // 如果还是按照这种写法的话 结果是
}
a.prototype.age = 12
let obj = objectFactory(a,123)

console.log(obj.name);
console.log(obj.age);
console.log(obj.habit);

