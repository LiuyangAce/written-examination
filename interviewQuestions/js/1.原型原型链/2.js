function Person() {

}

const person = new Person()

// 由于Person原型对象也是一个对象 所以它也有一个__proto__ 指向它的原型对象
// （所有xx对象的原型对象都是Object原型对象）它的原型对象就是Object的原型对象 也就是Object.prototype

console.log(person.__proto__.__proto__ === Object.prototype);
//也可以这样写
console.log(Person.prototype.__proto__ === Object.prototype);

// Object构造函数原型对象 的原型是什么呢 ==> null
console.log(Object.prototype.__proto__ === null);

// 原型链
// 就是通过 __proto__ 连接起来的链条