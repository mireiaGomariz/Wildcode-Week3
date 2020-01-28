//

let heyWorld = name => `Hello  ${name}, good morning!`;


console.log(heyWorld("Mireia"));




//Arrow function

let students = ["Mireia", "Sandra", "Ailin", "Akash", "Binay", "Maca", "Lena", "Julie", "Rut", "Vlada"];

// let wildEmployees = ["Marc", "Calixto"];


let [first, second, third, ...rest] = students

console.log(rest);

// Spread operator
//
// let wildPeople = [...wildStudents, ...wildWmployees]

// console.log(wildPeople);


let mySelf = {
  name: "Mireia",
  city: "Barcelona",
  adress: "Creu Alta",
  pet: {
    type: "dog",
    name: "Onis",
    age: 8
  }
}

let {name, city, address, pet } = mySelf;

console.log(name)
