// 嵌套数组求和
let arr = [2,1,3,[5,2,[2,0,1]],1,1,1]

let sum = 0;

function itemSumFun(arr) {

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      itemSumFun(element);
    } else {
      sum += element;
    }
  }
  return sum
}

console.log(itemSumFun(arr));