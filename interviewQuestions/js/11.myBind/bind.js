var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}

// 返回了一个函数
var bindFoo = bar.bind(foo,'ly'); 

bindFoo(12); // 1