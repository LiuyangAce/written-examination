var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.apply(foo); // 1
