const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Student } = require('../models/student');

router.get('/', (req, res) => {
    Student.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Student.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var stud = new Student({
        name: req.body.name,
        level: req.body.level,
        city: req.body.city,
        age: req.body.age,
    });

    stud.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error:' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var stud = {
        name: req.body.name,
        level: req.body.level,
        city: req.body.city,
        age: req.body.age,
    };
    Student.findByIdAndUpdate(req.params.id, { $set: stud }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found : ${req.params.id}`);

    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error:' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;
