function Person() {
  
}

// person 是 构造函数Person的实例对象
let person = new Person()

// 函数的prototype 属性指向 它的原型对象
// Person.prototype

// 实例对象的__proto__也指向它的原型对象
// person.__proto__

// 所以两者相等
console.log(Person.prototype === person.__proto__);


// 原型对象的construct 指向 它的构造函数
console.log(Person.prototype.constructor === Person);
console.log(person.__proto__.constructor === Person);
