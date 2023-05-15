Function.prototype.myBind = function(cons) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  const con = cons || window
  
  let self = this
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments, 0);

    return self.apply( this instanceof fBound ?  1 : con, args.concat(bindArgs))
  }

  /**
   * 把调用函数的prototype给到返回函数的prototype
   * 那么返回函数的实例 就可以调用 调用函数的原型上的/调用函数 的属性方法
   * 
   * 问题：这里有一个问题 直接修改 fBound.prototype 的时候，
   * 也会直接修改绑定（调用）函数的 prototype 
   * 解决办法: 用一个空函数转发
   * 
   */
  // fBound.prototype = this.prototype

  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

var foo = {
  value: 1
};


function bar(name, age) {
  this.habit = 'shopping';

  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';

// 返回了一个函数
var bindFoo = bar.myBind(foo,'ly'); 
var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin