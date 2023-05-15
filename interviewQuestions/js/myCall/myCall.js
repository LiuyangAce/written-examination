/**
 * 把this当成xxx的一个元素
 * 然后调用它 返回它的结果
 * 最后把这个元素删掉
 * @param {*} con 
 * @returns 
 */

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