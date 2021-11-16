const mongoose = require('mongoose');
const marker = mongoose.model('Marker');
const monster = mongoose.model('Monster');

function createMarker(req, res) {
    var marker = new Marker(req.body)
    marker.save().then(marker => {
        res.status(201).send(marker)
    }).catch(next)
}

function getMarkers(req, res, next) {
    marker.find().then(marker => {
        res.send(marker)
    }).catch(next)
}

function modifyMarker(req, res, next) {
    marker.findById(req.params.id).then(marker => {
        
        if(!marker) { return res.sendStatus(401); }

        let newInfo = req.body;

        if(typeof newInfo.coordinates !== 'undefined') {
            marker.coordinates = newInfo.coordinates;
        }
        if(typeof newInfo.date !== 'undefined') {
            marker.date = newInfo.date;
        }
        if(typeof newInfo.monster !== 'undefined') {
            marker.monster = newInfo.monster;s
        }
        marker.save().then(updatedMonster => {
            res.status(201).json(updatedMonster.publicData())
        }).catch(next)
    }).catch(next)
}

function deleteMarker(req, res) {
    marker.find({name: req.params.name}).then(marker => {

        if (!marker) { return res.sendStatus(401);}

        marker.deleteOne();
        res.status(200).send();
    });
}

module.exports = {
    createMarker,
    getMarkers,
    modifyMarker,
    deleteMarker
}