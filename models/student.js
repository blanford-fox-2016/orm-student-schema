'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate : {
        isNumeric: true,
        len: [10,14]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      get_name: function(name){
        students.findAll({
          where: {
            first_name:name
          }
        }).then(function(data, err){
          if(err){
            console.log(err);
          }else{
            for(let i = 0; i<data.length; i++){
              console.log(data[i].dataValues);
            }
          }
        })
      },
      get_age: function(input_age){
        students.findAll({
          where:{
            age: input_age
          }
        }).then(function(data, err){
          if(err){
            console.log(err);
          }else{
            for(let i = 0; i<data.length; i++){
              console.log(data[i].dataValues);
            }
          }
        })
      }
    }
  });
  return students;
};
