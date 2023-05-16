/**
 * 构造函数和原型组合
 * @param {*} name 
 */

function Person(name) {
  this.name = name;
}

Person.prototype = {
  // 重写了原型 constructor属性丢失 这里加上
  constructor: Person,
  getName() {
    console.log(this.name);
  }
}