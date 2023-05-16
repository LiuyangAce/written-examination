// 类数组对象 拥有一个 length 属性和若干索引属性的对象

// 类数组转化为数组方法 如下

function foo() {
  // es6解构
  // console.log([...arguments]);

  // Array.from()
  // const arg = Array.from(arguments)
  // console.log(arg);

  // slice 开始 结束 左闭右开 原数组不变
  // let arr =  Array.prototype.slice.call(arguments,0)
  // console.log(arr);

  // splice 开始 几个 代替的元素 改变原数组
  // let arr =  Array.prototype.splice.call(arguments,0)
  // console.log(arr);
}

foo(1,2)

let arr = [1,2,3]

console.log(arr.splice(0,2,'liuy'));
console.log(arr);
