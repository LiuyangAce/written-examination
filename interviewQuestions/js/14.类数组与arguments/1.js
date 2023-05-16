function foo(b, c){
  // 是函数实际参数长度
  console.log(arguments.length)

  // arguments.callee 是函数自身
  console.log(arguments.callee)

  b = "改变后的b的值"
  console.log(b, arguments[0]);
  arguments[0] = '再次改变'
  console.log(b, arguments[0]);

  c = "改变后c的值"
  console.log(arguments[1]);
}

console.log('形参：',foo.length);

foo(1)

// 对于传入的参数 实参和arguments的值会共享
// 没有传入时，实参和arguments的值不会共享