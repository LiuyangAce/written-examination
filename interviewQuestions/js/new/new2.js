function person (name, age) {
   this.name = name
   this.age = age
   this.habit = 'xxx'

   return {
    name,
    age
   }
}
let xiaom = new person('xiaom',12)
console.log(xiaom.name);
console.log(xiaom.age);
console.log(xiaom.habit);