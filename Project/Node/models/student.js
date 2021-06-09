const mongoose = require('mongoose');

var Student = mongoose.model('Student', {
    name: { type: String },
    level: { type: String },
    city: { type: String },
    age: { type: Number }
});


module.exports = { Student };
