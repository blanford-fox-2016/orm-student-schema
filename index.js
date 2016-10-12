"use strict"

const models = require('./models')
var Student = models.Student

//
// var sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: '.db/student.db'
// })
//
// sequelize
//   .authenticate()
//   .then(function (err) {
//     console.log('Connection has been established.');
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//
// Student.create({
//   firstname: "Abc",
//   lastname: "Def",
//   birthday: "1998-10-13"
// })

// Student.nama(2)
Student.age(6)
