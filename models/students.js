'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      min: 5
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:true
      }
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      validate: {
        isAlphanumeric: true,
        len: [10,12]}
    }
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getName: function(firstname) {
        Students.findAll({
          where: {
            firstname: firstname
          }
        })
      },
      validation:function() {
        Students.findAll({
          isEmail: true
        })
      }
    }
  });
  return Students;
};
