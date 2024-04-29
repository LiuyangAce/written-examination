function deepCopy(target, map = new WeakMap()) {

  if (typeof target === "object") {
    let obj = Array.isArray(target) ? [] : {};

    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, obj);

    for (const key in target) {
      let temp = target[key];
      obj[key] = deepCopy(temp);
    }
    return obj;
  } else {
    return target
  }


}

let a = { name: 'ly', n: { a: 1, b: 2 } };
console.log(a);

let b = deepCopy(a);
console.log(b);

b.name = 'tt'
b.n.a = 2

console.log(a);
console.log(b);
