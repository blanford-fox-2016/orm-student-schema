"use strict"

let models = require('./models');
let Student = models.Students;


Student.create({
  firstname: "juan",
  lastname: "budi",
  age: 1,
  email: "ahao@aiai.com",
  phoneNumber: 12345678901
}).catch( (err) => {
    console.log("Insert the data correctly");
});

//Student.getName("mangku");
// Student.validation("alalala@alala.com")
