function getValue(condition) {
  if (condition) {
    let value = "blue";
    return value;
  } else {
    console.log(111,value);
    // value 在此处不可用
    return null;
  }
  // value 在此处不可用
}