function fun3() {
  console.log('fun3')
}

function fun2() {
  fun3();
}

function fun1() {
  fun2();
}

fun1(); 

// push <fun1>
// push <fun2>
// push <fun3>

// pop pop pop
