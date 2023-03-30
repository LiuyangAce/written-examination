// 搜索多个文件夹路径（字符串数组，例如['/usr/bin', '/etc/config']），
// 查找是否有公共路径，若有则返回公共路径（字符串），否则返回 null

let arr = ['/home/usr/vue', '/home/usr/react']

function handle(arr) {
  let newArr = []
  arr.forEach(element => {
    let a= element.split('/')
    a.shift()
    newArr.push(a)
  });
  let arr1 = newArr[0]
  let arr2 = newArr[1]

  let minlegnth = arr1.length > arr2.length ? arr2.length : arr1.length
  let res = []
  for (let i = 0; i < minlegnth; i++) {
    if (arr1[i] === arr2[i]) {
      res.push(arr1[i])
    }
  }
  return '/' + res.join('/')
}

console.log(handle(arr))