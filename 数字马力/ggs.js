// [ '6,8,10', '3,4,5' ]
function gougu(n) {
  let arr = [];
  // 最小的勾股数为3，所以弦最小为5
  for (let a = n; a >= 5; a--) {
    let l = a - 1,
      r = 3;
    while (l > r) {
      if (l * l + r * r === a * a) {
        arr.push(`${r},${l},${a}`);
        l--;
        r++;
      } else if (l * l + r * r > a * a) {
        l--;
      } else {
        r++;
      }
    }
  }
  return arr;
}
console.log(gougu(10));
