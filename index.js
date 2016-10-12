"use strict"


var Sequelize = require('Sequelize')
var sequelize = new Sequelize({
  "storage" : "./db/init.sql",
  "dialect": "sqlite"
})

let models = require('./models')
let Student = models.Student


Student.create({
    firstname: "Goku",
    lastname: "Kakaroto",
    birthdate: "2007/05/12",
    email: "siboser@gmail.com",
    age: 9
})
// Student.get_Name()
// Student.calcAge()
