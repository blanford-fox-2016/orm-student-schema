"use strict"
let models = require('./models');
let Student = models.Student;
let Sequelize = require('Sequelize');

let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/init.sql'
});

// Student.create({
//   first_name: "Ren",
//   last_name: "Kiryu",
//   birthday: "1998-03-02",
//   gender: "female",
//   email: "kiryuren@gmail.com",
//   phone: "08988758832",
//   age: 18
// })

Student.create({
  first_name: "Bucky",
  last_name: "Barnes",
  birthday: "1901-07-04",
  gender: "male",
  email: "winter@soldi.er",
  phone: "085740112321",
  age: 115
})

Student.get_fullname(3)
Student.get_age(3)
