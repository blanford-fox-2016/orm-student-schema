"use strict"

var fs = require('fs')

fs.open('db/students.db', 'wx', function (err, fd) {
  fs.close(fd, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success!');
    }
    // console.error("Ooopps, something happen! ", err)
  })
})
