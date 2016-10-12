'use strict';

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: isUnique("Student", "email")
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true,
        len: [10, 13]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        min: 5
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      get_fullname: function(StudId) {
        Student.findAll({
          where: {
            id: StudId,
          }
        }).then((data, err) => {
          for (var i = 0; i < data.length; i++) {
            console.log(data[i].first_name + ' ' + data[i].last_name);
          }
        })
      },
      get_age: function(StudId) {
        Student.findAll({
          where: {
            id: StudId
          }
        }).then((data, err) => {
          for (var i = 0; i < data.length; i++) {
            console.log(`Umur dari siswa ${data[i].first_name} ${data[i].last_name} adalah ${data[i].age}`);
          }
        })
      }
    }
  });
  return Student;
};


function isUnique(modelName, field) {
  return function(value, next) {
    var Model = require("./")[modelName];
    var query = {};
    query[field] = value;
    Model.find({where: query, attributes: ["id"]}).then(function(obj) {
      if (obj) {
        next(field + ' "' + value + '" is already in use');
      } else {
        next();
      }
    });
  };
}
