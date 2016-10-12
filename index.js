 "use strict"
// var validator = require('validator');
 var models = require('./models')
//
var Student = models.students
//
// console.log(Student);
Student.create({
  first_name: "afa",
  last_name: "diobok",
  email: "ajilantan@gmail.com",
  age: 34,
  phone:08573060703
})
// Student.get_name("alex")
// Student.get_age(20)



//console.log(validator.isEmail('ajilantag@bar.com'));
// console.log('ajilantag@bar.com').then(function(err){
//   if(err){
//     console.log("email error");
//   }
// });
