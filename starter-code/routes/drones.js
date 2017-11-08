const express = require('express');
const Drone = require('../models/drone');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find({}, (err, drones) => {
    if (err) { return next(err) }

    res.render('drones/index', {
      drones: drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {
  const droneInfo = {
      name: req.body.name,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      description: req.body.description
  };

  new Drone({
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }).save( (err) => {
    if (err) { return next(err) }

    return res.redirect('/drones');
  });
});

module.exports = router;
