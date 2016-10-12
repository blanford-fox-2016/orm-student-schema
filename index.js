"use strict"

var models = require('./models')

var Student = models.Student


Student.create({
  first_name: "axaxaxax",
  last_name: "hehehhe",
  gender: "Male",
  age: 9,
  email: "rererere@gmail.com",
  phone: "12321"
}).catch(function(err) {
  console.log(err.message);
})

// Student.update({
//   age: 22,
// }, {
//   where: {
//     age: null
//   }
// });
// console.log(Student.getName());
// Student.classMethods.
Student.getName()
// Student.getAge()
