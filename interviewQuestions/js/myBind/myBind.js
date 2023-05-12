// 不完整

Function.prototype.myBind = function(context) {
  let self = this
  let arg = Array.from(arguments).splice(1)
  let fBound = function() {
    let arg2 = Array.from(arguments)
    
    console.log("xxx:", fBound, this);
    return self.call(
      // foo instanceof bindFoo
      this instanceof fBound ? this : context 
      , ...arg, ...arg2)
  }

  return fBound
}

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(1,this.value);
  console.log(2, name);
  console.log(3, age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.myBind(foo, 'daisy');
console.log("bindFoo:",bindFoo);
var obj = new bindFoo('18');
// undefined
// daisy
// 18
// console.log(obj.habit);
// console.log(obj.friend);
// shopping
// kevin


