function foo() {
  console.log(a);
  a = 1;
}

foo(); // ???

function bar() {
  a = 1;
  console.log(a);
}
bar(); // ???

// AO:{
//   argument: {
//     0: undefined,
//     length: 0
//   }
// }

// AO:{
//   argument: {
//     0: undefined,
//     length: 0
//   }
// }
// 执行
// a: 1
// 所以输出 1