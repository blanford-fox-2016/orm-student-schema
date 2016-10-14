'use strict';
var Sequelize = require('sequelize');
require('sequelize-isunique-validator')(Sequelize);


module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    nama:DataTypes.TEXT,
    gender: DataTypes.TEXT,
    birthday: DataTypes.DATE,
    age:{
      type:DataTypes.INTEGER,
      validate:{
        min:5
      }
    },
    email:{
       type: DataTypes.STRING,
       allowNull: false,
       isUnique: true,
       validate: {
           isEmail: true,
           isUnique: sequelize.validateIsUnique('email')
       }
      },
    phone: {
      type:DataTypes.TEXT,
      validate:{
        len:{
          args: 10
        }
      }
    }




  }, {
    classMethods: {
      associate: function(models) {
      },
      getName:function(){
        Student.findAll({
          attributes:['nama']
        }).then((data,err)=>{
          for (var i = 0; i < data.length; i++) {
            console.log(`${data[i].nama}`);
          }
        })
      },

      getAge:function(){
        Student.findAll({
          attributes:['age']
        }).then((data,err)=>{
          for (var i = 0; i < data.length; i++) {
            console.log(`${data[i].age}`)
          }
        })
      }

    }
  });
  return Student;
};

// class Student{
//   constructor(first_name,last_name,birthday){
//     this.first_name = first_name
//     this.last_name = last_name
//     this.birthday = birthday
//   }
// }
