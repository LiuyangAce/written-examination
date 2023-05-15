Function.prototype.myApply = function(cn, arg) {
  let context = cn || window;
  
  context.fn = this

  let result = context.fn(...arg)

  delete context.fn
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

bar.myApply(foo,[1,3]); // 1