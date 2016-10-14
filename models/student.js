'use strict';



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
        type:DataTypes.TEXT,
        unique: true,
        validate: {
           isEmail:true,
           isUnique: function(value, next) {
               Student.find({
                   where: {email: value},
                   attributes: ['id']
               })
                   .done(function(error, user) {

                       if (error)
                           // Some unexpected error occured with the find method.
                           return next(error);

                       if (user)
                           // We found a user with this email address.
                           // Pass the error to the next method.
                           return next('Email address already in use!');

                       // If we got this far, the email address hasn't been used yet.
                       // Call next with no arguments when validation is successful.
                       next();

                   });

           }
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
