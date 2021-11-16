/*
const Monster = require('../models/monster')

function createMonster(req, res) {
    var monster = new Monster(req.body)
    res.status(201).send(monster)
}

function getMonsters(req, res) {
    var monster1 = new Monster("Bigfoot", "Mythic creature that inhabits the forests of North America", "North America");
    var monster2 = new Monster("Skunk Ape", "Mythic creature that inhabits the wetlands of Florida", "Florida");
    res.send([monster1, monster2]);
}

function modifyMonster(req, res) {
    var monster1 = new Monster(req.params.name, req.params.description, "All over the world")
    var modifications = req.body
    monster1 = { ...monster1, ...modifications }
    res.send(monster1)
}

function deleteMonster(req, res) {
    res.status(200).send(`Monster ${req.params.id} deleted`);
  }
  
  module.exports = {
    createMonster,
    getMonsters,
    modifyMonster,
    deleteMonster
  }

  
*/

const mongoose = require('mongoose');
const Monster = mongoose.model('Monster');

function createMonster(req, res) {
    var monster = new Monster(req.body)
    monster.save().then(monster => {
        res.status(201).send(monster)
    }).catch(next)
}

function getMonsters(req, res, next) {
    if(req.paramas.name) {
        Monster.find({name: req.params.name}).then(monster => {
            res.send(monster)
        }).catch(next)
    } else {
        Monster.find().then(monster => {
            res.send(monster)
        }).catch(next)
    }
}

function modifyMonster(req, res, next) {
    Monster.find({name: req.params.name}).then(monster => {
        
        if(!monster) { return res.sendStatus(401); }

        let newInfo = req.body;
        if(typeof newInfo.name !== 'undefined') {
            monster.name = newInfo.name;
        }
        if(typeof newInfo.description !== 'undefined') {
            monster.description = newInfo.description;
        }
        if(typeof newInfo.location !== 'undefined') {
            monster.location = newInfo.location;
        }
        monster.save().then(updatedMonster => {
            res.status(201).json(updatedMonster.publicData())
        }).catch(next)
    }).catch(next)
}

function deleteMonster(req, res) {
    Monster.find({name: req.params.name}).then(monster => {

        if (!monster) { return res.sendStatus(401);}

        monster.deleteOne();
        res.status(200).send();
    });
}

module.exports = {
    createMonster,
    getMonsters,
    modifyMonster,
    deleteMonster
}