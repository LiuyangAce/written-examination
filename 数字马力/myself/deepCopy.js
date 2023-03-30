// 还未解决 循环引用问题 以及 map/set/buffer

function deepCopy(obj) {
  if (obj === null) return null;

  if (typeof obj === undefined) return undefined;

  // 如果是普通常量，直接返回
  if (typeof obj !== "object") return obj;

  if (obj instanceof Date) return new Date(obj);

  if (obj instanceof RegExp) return new RegExp(obj);

  let newObj = obj instanceof Array ? [] : {};

  // 返回一个 给定对象自身所有symbol属性 的数组
  // 防止 {symbol: 'liuyang'symbol: 'liuyang'}
  let symKeys = Object.getOwnPropertySymbols(obj);
  if (symKeys.length) { 
      symKeys.forEach(symKey => {
          newObj[symKey] = deepCopy(obj[symKey]);   
      });
  }
  for (let key in obj) {
    // 不拷贝原型链上的属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

let originalObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  },
  e: function() {
    console.log('this is e function');
  },
  f: new Date(),
  g: {
    [Symbol(1)]: 'liuyang'
  },
  h: new RegExp(/123/),
  i: Symbol('liuyang')
};


let copiedObject = deepCopy(originalObject);
console.log(copiedObject);
console.log(copiedObject === originalObject);

console.log(typeof true);
