'use strict'

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    age: {
      type: DataTypes.INTEGER,
      validate: {min:5}
    },
    phone: {
      type: DataTypes.STRING,
      validate: {isNumeric:true, len:[10, 17]}
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:true,
        isUnique: function(newemail, next) {
          Student.find({
            where: {email: newemail},
            attributes: ['id']
          }).done(function(err){
            if(err){
              return err;
            }
            next()
          })
        }}
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      get_Name:function(){
       Student.findAll({
         attributes:['firstname']['lastname']
       }).then((data,err)=>{
         for (var i = 0; i < data.length; i++) {
           console.log(`${data[i].firstname} ${data[i].lastname}`);
         }
       })
     },
      calcAge:function(){
        Student.findAll({
          attributes:['birthdate']
        }).then((data,err)=>{
          for (var i = 0; i < data.length; i++) {
            var birthdate = new Date(`${data[i].birthdate}`);
            var cur = new Date();
            var diff = cur-birthdate;
            var age = Math.floor(diff/31536000000);
            console.log(`Usia ${age} `);
          }
        })
      },
    }
  });
  return Student;
};
