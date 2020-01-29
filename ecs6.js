// //
//
// let heyWorld = name => `Hello  ${name}, good morning!`;
//
//
// console.log(heyWorld("Mireia"));
//
//
//
//
// //Arrow function
//
// let students = ["Mireia", "Sandra", "Ailin", "Akash", "Binay", "Maca", "Lena", "Julie", "Rut", "Vlada"];
//
// // let wildEmployees = ["Marc", "Calixto"];
//
//
// let [first, second, third, ...rest] = students
//
// console.log(rest);
//
// // Spread operator
// //
// // let wildPeople = [...wildStudents, ...wildWmployees]
//
// // console.log(wildPeople);
//
//
// let mySelf = {
//   name: "Mireia",
//   city: "Barcelona",
//   adress: "Creu Alta",
//   pet: {
//     type: "dog",
//     name: "Onis",
//     age: 8
//   }
// }
//
// let {name, city, address, pet } = mySelf;
//
// console.log(name)
//
//


//
//
// //4 find
// const people = [
//   { name: 'James', age: 18},
//   { name: 'Mire', age: 26},
//   { name: 'Tal', age: 23},
//   { name: 'James', age: 20},
//   { name: 'Maria'}
// ];
//
//
// const find = (people) => (people.age <= 18);
//
// console.log(people.some(find))
// //
// //
// // const foundJames = people.find(({name, age}) => (name === "James" && age === 65));
// //
// // console.log(foundJames);
//
// //5. Evry
//
// const gotAge = people.every(people => people.age != undefined);
//
//
// console.log(gotAge)
