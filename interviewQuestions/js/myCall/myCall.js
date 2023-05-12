Function.prototype.myCall = function (con) {
  let arg = Array.from(arguments).splice(1)
  
  let context = con || window;

  context.fn = this
  let result = context.fn(...arg)

  delete this.fn
  return result
}


var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
  return 1
}
let value = 1

bar.myCall(foo, 'kk', 12); // 1