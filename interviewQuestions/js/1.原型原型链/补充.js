function Person() {

}
var person = new Person();

/**
 * 注意点
 * person 是实例对象 是没有constructor属性的 他会去它的原型找 也就是Person.prototype
 * Person.prototype的constructor属性 为 Person
 * 所以相等
 */
console.log(person.constructor === Person); // true