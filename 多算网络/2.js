/**
 * 用给定的数组 分割1-100的数据
 * e.g: 
 * [5,3,9]
 * 1~3 4~5 6~9 10~100
 */

let arrT2 = [5, 3, 9];

// segmentation：分割
function segmentationFun(arrT2) {

  // 排序
  let newArrT2 = arrT2.sort();

  let start = 1;

  let arr = [];

  for (const iterator of newArrT2) {

    arr.push([start,iterator])

    start = iterator +1
  }

  arr.push([start,100])


  return arr;
}

console.log(segmentationFun(arrT2));
