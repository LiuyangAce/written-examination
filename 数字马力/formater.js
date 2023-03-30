let money = "1221fa111";
// let money = "1221fa1";

function moneyFormat(money) {
  let arr = money.split("").reverse()
  let res = [];
  let num = 1
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    res.push(element)
    if (num % 3 === 0) {
      res.push(',')
    }
    num++
  }
  console.log(res[res.length-1] === ',')
  if (res[res.length-1] === ',') {
    res.shift()
  }
  console.log(res)
  console.log(res.reverse().join(""));
  return res.join("")
}
// console.log(0 % 2)
// console.log(1 % 2)
// console.log(2 % 2)
moneyFormat(money);
    // // 一，遍历方法
    // function qianFenWei(num) {
    //   // 将数字转成字符串
    //   num += ''
    //   // 声明输出的结果变量
    //   let result = ''
    //   // split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。
    //   num = num.split('')
    //   num.forEach((item, index) => {
    //     // 遍历时，后遍历的数需放入先遍历的数前面
    //     result += item
    //     // 每隔3位加一个逗号
    //     if (index % 3 === 2 && index !== num.length - 1) {
    //       result += ','
    //     }
    //   })

    //   return result
    // }
    // console.log(qianFenWei(1234567))//浏览器控制台打印1，234，567
