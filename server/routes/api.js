const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Day = require('../models/day');
const Exercise = require('../models/exercise');
const db = "mongodb://simon:invinsible4@ds151242.mlab.com:51242/gainz-tracker";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;
mongoose.connect(db, {useMongoClient: true}, function(err) {
  if(err) {
    console.log('Connection error');
  }
});

router.get('/users', function(req, res) {
  User.findOne({username: 'sim2'})
      .exec(function(err, users) {
        if (err) {
          console.log('Error getting the users');
        } else {
          res.json(users);
          console.log(users);
        }
      });
});



router.post('/users', function (req, res, next) {
  var user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email
  });
  user.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'User created',
      obj: result
    });
  });
});

router.post('/users/days', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    var exercise = new Exercise({name: 'exampleExercise', sets: 2, reps: 10, weight: 185});
    var day = new Day({date: new Date()});
    day.exercises.push(exercise);
    user.days.unshift(day);
    user.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Error while trying to add a new day.',
          error: err
        });
      }
      res.status(201).json({
        message: 'Sucessfully added a new day.',
        obj: result.days
      });
    });
  });
});

router.patch('/users/days', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    user.days.splice(req.body.index, 1);
    user.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Day not deleted.',
          error: error
        });
      }
      res.status(200).json({
        message: 'Day Successfully deleted',
        obj: result.days
      });
    });
  });
});


router.get('/users/days', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    res.status(201).json({
      message: 'Days fetched Successfully.',
      obj: user.days
    });
  });
});


router.post('/users/days/exercises', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
        return res.status(500).json({
            title: 'An error occurred.',
            error: err
        });
    }
    var exercise = new Exercise({name: req.body.exerciseName, sets: req.body.sets, reps: req.body.reps, weight: req.body.weight});
    user.days[req.body.index].exercises.push(exercise);
    user.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Error adding new exercise.',
          error: err
        });
      }
      res.status(201).json({
        message: 'Sucessfully added new exercise.',
        obj: result.days
      });
    });
  });
});

router.patch('/users/days/exercises', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
        return res.status(500).json({
            title: 'An error occurred.',
            error: err
        });
    }
    user.days[req.body.dayIndex].exercises.splice(req.body.exerciseIndex, 1);
    user.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Error adding new exercise.',
          error: err
        });
      }
      res.status(201).json({
        message: 'Sucessfully removed exercise.',
        obj: result.days
      });
    });
  });
});

router.post('/users/login', function (req, res, next) {
  User.findOne({username: req.body.username}, function(err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!user) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid user or password.'}
      });
    }
    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login failed',
        error: {message: 'Invalid user or password.'}
      });
    }
    var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(201).json({
      message: 'Successfully logged in!',
      token: token,
      userId: user._id
    });
  });
});


module.exports = router;
