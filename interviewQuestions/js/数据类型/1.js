console.log(typeof 1);
console.log(typeof null); //object
console.log(1 instanceof Number);
console.log({} instanceof Object);
console.log('--',[] instanceof Function);

// instanceof 实现
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);

  let prototype = right.prototype;

  while (true) {
    if (!proto) false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof([], Object));
