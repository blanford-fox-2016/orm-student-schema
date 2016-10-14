'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.TEXT,
    email:{
        type:DataTypes.TEXT,
        unique: true,
        validate: {
           isEmail:true,
           isUnique: function(value, next) {
               Teacher.find({
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
    phone: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Teacher.hasMany(models.Student)
      }



    }
  });
  return Teacher;
};
