// 巩固

Function.prototype.myCall = function(constru) {
  let cons = constru || window
  let argArr = Array.from(arguments).splice(1)
  cons.fn = this
  const result = cons.fn(...argArr)
  delete cons.fn
  return result
}

var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name, age);

  return {name, age}
}

console.log(bar.myCall(foo, 1,2 ));