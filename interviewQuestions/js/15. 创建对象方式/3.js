/**
 * 原型模式
 * 缺点: 1. 所有的属性和方法都共享
 * 2. 不能初始化参数
 */
function Person(params) {
  
}
Person.prototype.name = 'liuyang'
Person.prototype.getName = function() {
  console.log('获取名字:',this.name);
}

const person = new Person()
console.log(person.name);
person.getName()

