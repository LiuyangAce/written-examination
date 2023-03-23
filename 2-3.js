// 实现链式的加减乘除
//（myCalculator(1).add(12).minus(3).multi(10).div(5).getValue() === 25）


class myCalculator {
  constructor(num) {
    this.num = num
  }
  add(num) {
    this.num = this.num + num
    return this
  }
  minus(num) {
    this.num = this.num - num
    return this
  }
  multi(num) {
    this.num = this.num * num
    return this
  }
  div(num) {
    this.num = this.num / num
    return this
  }
  getValue() {
    return this.num
  }
}

// .minus(3).multi(10).div(5)
// console.log(new myCalculator(1).add(12).minus(3).multi(10).div(5).getValue())
console.log(new myCalculator(1).add(12).minus(3).multi(10).div(5).getValue() === 25)