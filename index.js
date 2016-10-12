"use strict"

let models = require('./models')

let Student = models.Student

Student.create({
  first_name: "Tama",
  last_name: "Stark",
  age: 10,
  gender: "Male",
  birthday: "1994-10-03",
  email: "tama@yahoo.com",
  phone: "1234567891"
}).then(() => {
  console.log(`Data Created Successsfully`)
}).catch((err) => {
  if(err){
    console.log(err.message)
  }
})

// Student.isValid()

// Student.getName()
// Student.getAge()
