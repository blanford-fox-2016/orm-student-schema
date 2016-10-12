"use strict"

let models = require('./models');
let Siswa = models.Student;
let Guru = models.Teacher;

// Siswa.create({
//   gender:"cowok",
//   birthday:"1998-09-09",
//   email:"sfirst.amdddda@gmail.com",
//   phone:"12345678910",
//   age:"6",
//   nama:"Tiiiii"
// })
let arrayGuru = [{
      name:"guru2",
      email:"adsfirst.amdddda@gmail.com",
      phone:"12345678910"
    },
    {
      name:"guru3",
      email:"2sfirst.amdddda@gmail.com",
      phone:"12345678910"
    },
    {
      name:"guru4",
      email:"3sfirst.amdddda@gmail.com",
      phone:"12345678910"
    },
    {
      name:"guru5",
      email:"4sfirst.amdddda@gmail.com",
      phone:"12345678910"
    },
    {
      name:"guru5",
      email:"5sfirst.amdddda@gmail.com",
      phone:"12345678910"
    },
    {
      name:"guru6",
      email:"6sfirst.amdddda@gmail.com",
      phone:"12345678910"
    },
    {
      name:"guru9",
      email:"7sfirst.amdddda@gmail.com",
      phone:"12345678910"
    },
    {
      name:"guru9",
      email:"8sfirst.amdddda@gmail.com",
      phone:"12345678910"
    },
    {
      name:"guru10",
      email:"9sfirst.amdddda@gmail.com",
      phone:"12345678910"
  }]

for (var i = 0; i < arrayGuru.length; i++) {
  Guru.create(arrayGuru[i])
}



// Siswa.getName()
// Siswa.getAge()


//rubah ini pada models/index.js jika menggunakan selain windows
//  \config\config.json
//var config    = require(__dirname + '/../config/config.json')[env];
