/**
 * 构造函数模式
 * 优点： 因为new的时候会把函数的protortype
 * 与实例的__proto__连接起来；所以创造出来的实例能够被识别为
 * 一个指定的类型
 * 缺点: 每次创建实例的时候，每个方法都要被创建一次
 * @param {*} name 
 */
function Person(name) {
  this.name = name;
  this.getName = function () {
      console.log(this.name);
  };
}

var person1 = new Person('kevin');