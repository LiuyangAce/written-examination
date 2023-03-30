// 一串字符串，当字符[a-zA-Z]重复，输出true，否则输出false。
// 例1：dssfsfsf–>true
// 例2：21333ghksd–>false

// let str = "dssfsfsf"
let str = "abcd"

function handle(str) {
  let set = new Set()
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if ( !set.has(element) ) {
      set.add(element)
    } else {
      return false
    }
  }
  return true
}

console.log(handle(str))