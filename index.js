"use strict"

var models = require('./models')

var Student = models.Student

Student.create({
  first_name: "axaxaxax",
  last_name: "hehehhe",
  gender: "Male",
  age: 9,
  email: "xaxaxaa@gmail.com",
  phone: "1231231233"
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
