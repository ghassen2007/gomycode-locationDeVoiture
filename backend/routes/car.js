const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const Car = require('../models/Car');

router.get('/cars', function(req, res) {
    Car.find({}, function (err, docs) {

        return res.status(200).json({
            cars:docs

     
         });


    });


  
          
        })
    

module.exports = router;