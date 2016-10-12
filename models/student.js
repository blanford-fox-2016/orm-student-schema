'use strict';
module.exports = function(sequelize, DataTypes) {
  var student = sequelize.define('student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      name: function(){
        var fullname = `${student.firstname} ${student.lastname}`
        return fullname
      },
      calcage: function(){
        var birthdate = new Date(`${student.birthdate}`);
        var cur = new Date();
        var diff = cur-birthdate; // This is the difference in milliseconds
        var age = Math.floor(diff/31536000000); // Divide by 1000*60*60*24*365
        return age
      }
    }
  });
  return student;
};
