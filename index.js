"use strict"
const models = require('./models/index');

models.Student.addStudent("Windi","Krismayunar","1973-04-04","windy@gmail.com",19)
models.Student.addRandomStudent()
models.Student.getAllStudents()
models.Student.editStudentFirstName()
models.Student.editStudentLastName()
models.Student.editStudentEmail()
models.Student.editStudentAge()
models.Student.editStudentBirthdate()
models.Student.deleteStudent()





// const faker = require('faker')

// let insertRandomStudent = () => {
//   models.Student.create({
//     first_name: faker.name.firstName(),
//     last_name: faker.name.lastName(),
//     birthdate: faker.date.past(),
//     email: faker.internet.email()
//   })
// }

// let insertStudent = (firstName,lastName,birthdate) => {
//   models.Student.create({
//     first_name: firstName,
//     last_name: lastName,
//     birthdate: birthdate,
//     email:email
//   })
// }

// let viewAllStudent = () => {
//   models.Student.findAll({
//     attributes : ['id', 'first_name', 'last_name', 'birthdate']
//   }).then(function(person){
//     for(var i = 0; i < person.length; i++){
//       console.log(`ID : ${person[i].dataValues.id} | ${person[i].dataValues.first_name} ${person[i].dataValues.last_name} | ${person[i].dataValues.birthdate}`);
//     }
//   })
// }

// let findByFirstName = (value) => {
//   models.Student.findOne({where:{first_name: value}}).then(function(person){
//     console.log(`Full name : ${person.first_name} ${person.last_name}`);
//   })
// }

// let findByLastName = (value) => {
//   models.Student.findOne({where:{last_name: value}}).then(function(person){
//     console.log(`Full name : ${person.first_name} ${person.last_name}`);
//   })
// }

// let id = (value) => {
//   models.Student.findOne({where:{id: value}}).then(function(person){
//     console.log(`Full name : ${person.first_name} ${person.last_name}`);
//   })
// }

// let updateFirstName = (user_id, newName) => {
//   models.Student.findOne({where:{id: user_id}}).then(function(person){
//     person.update({ first_name: newName}, {fields: ['first_name']}).then(function() {
//       console.log(`Data updated`);
//       })
//     })
//   }
//
// let updateEmail = (user_id, newEmail) => {
//   models.Student.findOne({where:{id: user_id}}).then(function(person){
//     person.update({ email: newEmail}, {fields: ['email']}).then(function() {
//       console.log(`Email updated`);
//       })
//     })
//   }


// let updateAge = (user_id, newAge) => {
//   models.Student.findOne({where:{id: user_id}}).then(function(person){
//     person.update({ age: newAge}, {fields: ['age']}).then(function() {
//       console.log(`Age updated`);
//       })
//     })
//   }


// let destroyer = (user_id) => {
//   models.Student.findOne({where:{id:user_id}}).then(function(person){
//     return person.destroy()
//   }).then(function(){
//     console.log(`Data deleted`);
//   })
// }

// let bulkEmail = () => {
//   for(var i = 1; i<= 14; i++){
//     if(i===4){
//       console.log(`data has been deleted`);
//     }else{
//       updateEmail(i,faker.internet.email())
//     }
//   }
// }
//
//
// let bulkAge = () => {
//   for(var i = 1; i<= 14; i++){
//     if(i===4){
//       console.log(`data has been deleted`);
//     }else{
//       updateAge(i,Math.ceil(Math.random()*5+5))
//     }
//   }
// }




// bulkEmail()
// bulkAge()
// viewAllStudent()
// insertStudent("Ahyana","Rizky","1992-01-18")
// insertRandomStudent()
// findByFirstName('Vita')
// id(5)
// updateFirstName(7,"Toni")
// destroyer(4) // deleted id = 4
