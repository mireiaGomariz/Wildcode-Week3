// let person = {
//   name: 'Mireia',
//   city: 'Sabadell',
//   age: '26',
//   sayPresentation: function() {
//     return "hello " + this.name;
//   }
// }
//
// console.log(person.sayPresentation())

// NOT DO IT!!
// let person = {
//   name: 'Mireia',
//   city: 'Sabadell',
//   age: '26',
//   sayPresentation: () => { `hello ${this.name}`}
// }
//
// console.log(person.sayPresentation())

//old way classes
// let Person = function (firstName, city) {
//   this.firstName = firstName;
//   this.city = city;
//
//   this.sayHello = function () {
//     console.log(`My name is ${this.firstName}`);
//   }
// }
//
// const marc = new Person('Marc', 'Barcelona');
//
// marc.sayHello();


//class

class Person {
  constructor(firstName, city) {
    this.firstName = firstName;
    this.city = city;
  }
  sayHello() {
    console.log(`My name is ${this.firstName}`)
  }

  }
}
