"use strict"

let models = require('./models');
let Siswa = models.Student;

Siswa.create({
  gender:"cowok",
  birthday:"1998-09-09",
  email:"sfirst.amdddda@gmail.com",
  phone:"12345678910",
  age:"6",
  nama:"Tiiiii"
})



// Siswa.getName()
// Siswa.getAge()


//rubah ini pada models/index.js jika menggunakan selain windows
//  \config\config.json
//var config    = require(__dirname + '/../config/config.json')[env];
