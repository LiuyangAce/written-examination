var obj = {
  value: 1
};
function foo(o) {
  // o.value = 2;
  // console.log(o.value); //2

  o = 2
  console.log(o);
}

foo(obj);
console.log(obj.value) // 2 // 1