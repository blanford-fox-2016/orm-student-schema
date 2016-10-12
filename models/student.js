'use strict';
var Sequelize = require('sequelize');
require('sequelize-isunique-validator')(Sequelize);


module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    age: {
        type: DataTypes.INTEGER,
        validate: {
          isAge: (value) => {
            if(value < 5){
              throw new Error('Student\'s Age is Have to Above 5 Years')
            }
          }
        }
    },
    gender: DataTypes.TEXT,
    birthday: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      validate: {
        isEmail: true,
        isUnique: sequelize.validateIsUnique('email')
      }
    },
    phone: {
        type: DataTypes.TEXT,
        validate: {
          len: {
            args: [10,11],
            msg: "Phone Length Should 10 Digits"
          },
          isInt: {
            args: true,
            msg: "Phone Length Should Integer"
          }
        }
    }
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getName: function(){
        Student.findAll({
          attributes: ['first_name', 'last_name']
        }).then((data, err) => {
          if(err){
            console.log(err);
          }else{
            for(var i = 0 ; i < data.length ; i++){
              console.log(`${data[i].first_name} ${data[i].last_name}`);
            }
          }
        })
      },
      getAge : function(){
        Student.findAll({
          attributes: ['age']
        }).then((data, err) => {
          if(err){
            console.log(err);
          }else{
            for(var i = 0 ; i < data.length ; i++){
              console.log(`${data[i].age}`);
            }
          }
        })
      }
    }
  });
  // console.log(Student);
  return Student;
};

// console.log(module.exports);
