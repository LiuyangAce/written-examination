// gg
Function.prototype.myApply = function(cons) {
  let con = cons || window

  let argArr = Array.from(arguments).splice(1)

  con.fn = this

  const result = con.fn(...argArr.flat(Infinity))
  return result
}


var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name, age);

  return 1
}

console.log(bar.myApply(foo, [1,2] ));

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));