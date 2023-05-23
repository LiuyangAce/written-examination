// Function.prototype.myCall = function(constr) {
//   let arg = Array.from(arguments).slice(1)

//   constr.fn = this || window

//   let res = constr.fn(...arg)

//   delete constr.fn
//   return res
// }

// Function.prototype.myApply = function(constr) {
//   let arg = Array.from(arguments).slice(1).flat(1)
//   constr.fn = this || window

//   let result = constr.fn(...arg)

//   delete constr.fn
//   return result
// }

Function.prototype.myBind = function(constr) {
  let arg = Array.from(arguments).slice(1)

  let self = this

  let fNOP = function () {}
  function foo() {
    let arg2 = Array.from(arguments).slice(0)

    console.log(',,,,,',this);
    return self.apply(this instanceof foo ? this : constr ,[...arg,arg2])
  }

  fNOP.prototype = self.prototype
  foo.prototype = new fNOP()
  return foo
}


let o = {
  bar: 1
}
function fun(x,y,z,k) {
  console.log('in fun....');
  
  this.habit = 'shopping';
  console.log(this, this.bar);
  console.log(x,y,z,k);
}

fun.prototype.friend = 'kevin';

// fun.myCall(o,1,2,3)
// fun.myApply(o,[1,2,3])

let bindFn = fun.myBind(o,1,2,3)

let newBindObj = new bindFn('liuyang')

console.log('newBindObj---');
console.log(newBindObj);
console.log(newBindObj.friend);
console.log(newBindObj.habit);
