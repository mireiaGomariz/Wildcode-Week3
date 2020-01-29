// 1- forEach
//
// const arr = ['Alice', 'Bob', 'Charlie'];
//
// //Todo
//
//
// array.forEach(element => console.log("Hello" + element));
// //
//
//
// // 2-map
//
// const people = [
//   { name: 'James', age: 18},
//   { name: 'Mire', age: 26}
// ];
//
// const map = people.map(x => x['name']);
// console.log(map);

//3 filter
// const people = [
//   { name: 'James', age: 18},
//   { name: 'Mire', age: 26},
//   { name: 'Tal', age: 23}
// ];
//
// const result = people.filter(word => word.name >= 18);
//
// console.log(result);

//
//
// class Person {
//   constructor(firstName, city) {
//     this.firstName = firstName;
//     this.city = city;
//   }
//   sayHello() {
//     console.log(`My name is ${this.firstName}`);
//
//
//   }
// }
//
// const mireia = new Person('Mireia', 'Barcelona');
//
// console.log(mireia)
// mireia.sayHello();




class Vehicle {
  constructor(color, model){
    this.color = color;
    this.model = model;

  }
  sayCar( {
    console.log(`car ${color}, ${model}`)
  })

}

const car = New Vehicle('Red', 'Exeo');


console.log(car.display());

car.sayCar()
