// 实现JSON.stringify
function myStringify(param) {
  if (typeof param === 'string'
    || typeof param === 'number'
    || typeof param === 'boolean'
    || typeof param === 'undefined'
  ) {
    return param +''
  } else if (typeof param === 'function') {
    return undefined
  } else {
    let newP = {}
    let keysArr = Object.keys(param)
    for (let index = 0; index < keysArr.length; index++) {
      const element = keysArr[index];
      let strEle = myStringify(element)
      
    }
    return newP
  }
}

const a = {
  'age': 12
}
const b = function() {
  console.log('bbb');
}

let obj = {
  'aFun': function() {

  },
  'aObj': {
    'name':'13',
    'bFun': function() {

    },
  }
}


// console.log(myStringify('123123'));
// console.log(myStringify(a));


// console.log(JSON.stringify('123123'));
console.log(JSON.stringify(a));
console.log('123'.toString());
// console.log(JSON.stringify(123));
// console.log(JSON.stringify(b));
// console.log(JSON.stringify(undefined));