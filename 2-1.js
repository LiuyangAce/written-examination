// 给一个字符串，循环输出每一个字符，当输出到最后一个字符时再从头开始
let str = '123'
function loopOutput(str) {
  let i = 0
  return function () {
    if (i === str.length) i = 0
    let res = str[i]
    i++
    return res
  }
}
let a = loopOutput(str)
console.log(a(),a(),a(),a(),a())