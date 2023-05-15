// 总得来说 new干了这样两件件事情 
// 1.把构造函数的prototype赋给new出来的原型 让new出来的实例能调用构造函数的属性
// 2.this指向

function objectFactory() {
  let obj = new Object()

  // 获取传入的第一个参数，也就是构造函数
  // shift改变原数组 这时候arguments被改变了
  let Constructor = [].shift.call(arguments)

  // 构造函数的原型于obj的原型连接
  // 这样的话 Constructor上的属性 在new出来的实例上能调用
  obj.__proto__ = Constructor.prototype

  // 改变this指向
  let result = Constructor.apply(obj,arguments)

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

