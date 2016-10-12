'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age:{
      type: DataTypes.INTEGER,
      validate: {
        isBigger: function(value) {
          if (value <= 5) {
            throw new Error("Umur harus di atas 5")
          }
        }
      }
    },
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: true
        // unique: function(value) {
        //   Student.findOne({where:{email: value}}).then(function (data) {
        //     if (data.email === value) {
        //       throw new Error("email sudah ada")
        //       // console.log(data);
        //       // console.log(value);
        //     }
        //     else if (data.email === null) {
        //       console.log("test");
        //     }
        //   });
        // }
      }

    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        len: [10,15]
      }
    }

  },
  {
    classMethods: {
      associate: function(models) {

        // associations can be defined here
      },

      getName: function() {
        Student.findAll({
          attributes: ['first_name','last_name','email']
        }).then(function (user) {
            for (var i = 0; i < user.length; i++) {
              console.log(`${user[i].first_name} ${user[i].last_name}`)
            }
        });
      },

      getAge: function() {
        Student.findAll({
          attributes: ['first_name','last_name', 'age']
        }).then(function (user) {
            for (var i = 0; i < user.length; i++) {
              console.log(`${user[i].first_name} ${user[i].last_name} ${user[i].age}`)
            }
        });
      }

    }
  });
  return Student;




};
