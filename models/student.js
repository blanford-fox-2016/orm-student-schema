'use strict';
module.exports = function (sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      birthday: {
        type: DataTypes.DATE,
        validate: {
          ageval: function (value) {
            var today = new Date()
            var thisyear = today.getFullYear()
            var year = value.getFullYear()
            if (thisyear - year > 5) {
              throw new Error("You must be 5 or older to enter the course.")
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        isUnique: true,
        allowNull: false,
        validate: {
          isEmail: true,
          isUnique: sequelize.validateIsUnique('email')
        }
      },
      phone: {
        type: DataTypes.INTEGER,
        isUnique: true,
        validate: {
          isNumeric: true,
          len: [7, 10],
          msg: "Number must be between 7-10 digits."
        }
      }
    },

    {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        },
        nama: function (studentid) {
          Student.findOne({
            attributes: ['firstname', 'lastname'],
            where: {
              id: studentid,
            }

          }).then(function (student) {
            console.log(`${student.dataValues.firstname} ${student.dataValues.lastname}`);
          })
        },
        age: function (studentid) {
          Student.findOne({
            attributes: ['birthday', 'firstname'],
            where: {
              id: studentid
            }
          }).then(function (student) {

            var year = student.dataValues.birthday.getFullYear();
            var month = student.dataValues.birthday.getMonth();
            var day = student.dataValues.birthday.getDate();
            var now = new Date()
            var today = now.getDate()
            var thismonth = now.getMonth()
            var thisyear = now.getFullYear()
            var age = thisyear - year
            if (thismonth > month) {
              console.log(`${student.dataValues.firstname} is ${age} today.`);
            } else if (thismonth == month && today > day) {
              console.log(`${student.dataValues.firstname} is ${age} today.`);
            } else {
              console.log(`${student.dataValues.firstname} is ${age - 1} today.`);
            }

          });
        }
      }

    });
  return Student;
}
