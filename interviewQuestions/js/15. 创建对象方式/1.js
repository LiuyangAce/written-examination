/**
 * 工厂模式
 * 所有实例都指向一个原型（都是指向Object.prototype）
 * @param {*} name 
 * @returns 
 */
function createPerson(name) {
  var o = new Object();
  o.name = name;
  o.getName = function () {
      console.log(this.name);
  };

  return o;
}

var person1 = createPerson('kevin');

console.log(person1);
console.log(person1.__proto__.constructor);