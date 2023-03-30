// 将一串字符串驼峰化,第一个‘-’后的字母无需转小写为大写，其他‘-’后的字母需转小写为大写
// 例1：font-size转化为fontSize
// 例2：-weront-size转化为werontSize

// const oldstr = "-weront-size-"
// function transformation (oldstrstr) {
//   let str = oldstrstr
//   if (str[0] === '-') {
//     str = str.slice(1)
//   }
//   let strArr = str.split("-")
//   let newStr = strArr[0]
//   for (let index = 1; index < strArr.length; index++) {
//     newStr = newStr + upperCase(strArr[index])
//   }
//   return newStr
// }

// // abc => Abc
// function upperCase(str){
//   let newStr = str
//   return newStr[0].toUpperCase() + newStr.slice(1)
// }



// console.log(transformation(oldstr));

// console.log(upperCase('abc'));

// =========================================

// -weront-size转化为werontSize
// let str = "-weront-size-Abcds-asdf"
// function a(str) {
//   if (str[0] === '-') {
//     str = str.slice(1)
//   }
//   let arr = str.split("-")
//   let res = arr[0]
//   for (let index = 1; index < arr.length; index++) {
//     res = res + b(arr[index])
//   }
//   return res
// }

// function b (item) {
//   let newStr = item
//   return newStr[0].toUpperCase() + newStr.slice(1)
// }


// console.log(a(str));