'use strict';
const faker = require('faker')

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:true
      }
    },
    age: {
      type:DataTypes.INTEGER,
      validate:{
        min: 5
      }
    }
  }, {
    classMethods: {
      associate: function() {
        // associations can be defined here
      },
      addStudent: function(first_name,last_name,birthdate,email,age){
        Student.findAll({
          attributes: ['email']
        }).then(function(person){
          for(var i = 0; i<person.length; i++){
            if(email == person[i].dataValues.email){
              console.log(email);
              console.log(person[i].dataValues.email);
              throw new Error(`Email has been already taken`)
            }
          }
        }).then(function(){
          Student.create({
            first_name: first_name,
            last_name: last_name,
            birthdate: birthdate,
            email:email,
            age:age
          })
        })
      },
      addRandomStudent:function(){
        Student.create({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          birthdate: faker.date.past(),
          email: faker.internet.email(),
          age: Math.ceil(Math.random()*5+5)
        }).then(function(data){
          console.log(`New random student added to database`);
        })
      },
      getAllStudents: function() {
        Student.findAll({
          attributes : ['id', 'first_name', 'last_name', 'birthdate', 'email', 'age']
        }).then(function(person){
          for(var i = 0; i < person.length; i++){
            console.log(`ID : ${person[i].dataValues.id} | ${person[i].dataValues.first_name} ${person[i].dataValues.last_name} | ${person[i].dataValues.age} | ${person[i].dataValues.email} | ${person[i].dataValues.birthdate} `);
          }
        })
      },
      editStudentFirstName: function(user_id, newName){
        Student.findOne({where:{id: user_id}}).then(function(person){
          person.update({ first_name: newName}, {fields: ['first_name']}).then(function() {
            console.log(`Data updated`);
            })
          })
      },
      editStudentLastName: function(user_id, newName){
        Student.findOne({where:{id: user_id}}).then(function(person){
          person.update({ last_name: newName}, {fields: ['last_name']}).then(function() {
            console.log(`Data updated`);
            })
          })
      },
      editStudentEmail: function(user_id, newEmail){
        Student.findOne({where:{id: user_id}}).then(function(person){
          person.update({ email: newEmail}, {fields: ['email']}).then(function() {
            console.log(`Email updated`);
            })
          })
      },
      editStudentAge: function(user_id, newAge){
        Student.findOne({where:{id: user_id}}).then(function(person){
          person.update({ age: newAge}, {fields: ['age']}).then(function() {
            console.log(`Age updated`);
            })
          })
      },
      editStudentBirthdate: function(user_id, newBirthdate){
        Student.findOne({where:{id: user_id}}).then(function(person){
          person.update({ birthdate: newBirthdate}, {fields: ['birthdate']}).then(function() {
            console.log(`Birthdate updated`);
            })
          })
      },
      deleteStudent: function(user_id){
        Student.findOne({where:{id:user_id}}).then(function(person){
          return person.destroy()
        }).then(function(){
          console.log(`Data deleted`);
        })
      },
      getById: function(value){
        Student.findOne({where:{id: value}}).then(function(person){
          console.log(`Full Student Data : ${person[i].dataValues.id} | ${person[i].dataValues.first_name} ${person[i].dataValues.last_name} | ${person[i].dataValues.age} | ${person[i].dataValues.email} | ${person[i].dataValues.birthdate}`);
        })
      },
      getByFirstName: function(value){
        Student.findOne({where:{first_name: value}}).then(function(person){
          console.log(`Full Student Data : ${person[i].dataValues.id} | ${person[i].dataValues.first_name} ${person[i].dataValues.last_name} | ${person[i].dataValues.age} | ${person[i].dataValues.email} | ${person[i].dataValues.birthdate}`);
        })
      },
      getByLastName: function(value){
        Student.findOne({where:{last_name: value}}).then(function(person){
          console.log(`Full name : ${person.first_name} ${person.last_name}`);
        })
      }


    }
  });
  return Student;
};
