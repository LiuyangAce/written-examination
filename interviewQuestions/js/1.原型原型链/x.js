function Person() {

}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin
console.log(person.__proto__ === Person.prototype);
console.log(Person.prototype.constructor === Person);