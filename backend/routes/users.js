const router = require('express').Router();
let User = require('../models/user.model');
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//User.use(cors())

process.env.SECRET_KEY = 'secret'

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
  const userData = {
      username: req.body.username,
      password: req.body.password,
      college_id: req.body.college_id
  }
  User.findOne({
      username: req.body.username
  })
  .then(user => {
      if(!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
              userData.password = hash
              User.create(userData)
              .then(user => {
                  res.json({ status: user.username + ' registered!' })
              })
              .catch(err => {
                  res.json({
                      error : err
                  })
              })
          })
      }
      else {
          res.json({ error: '* User already exists' })
      }
  })
  .catch(err => {
      res.json({
          error : err
      })
  })
})

router.route('/login').post((req, res) => {
  //console.log(req.body);
  User.findOne({
      username: req.body.username
  })
  .then(user => {
      if(user) {
          if(bcrypt.compareSync(req.body.password, user.password)) {
              const payload = {
                  _id: user._id,
                  username: user.username
              }
              let token = jwt.sign(payload, process.env.SECRET_KEY, {
                  expiresIn: 1440
              })
              res.send(token)
              console.log(token);
              console.log(username+ 'logged in');
          }
          else {
              res.json({error: "User data incorrect"})
          }
      }
      else {
          res.json({error: "User does not exist"})
      }
  })
  .catch(err => {
      res.send('error: ' + err)
  })
})


router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const college_id = req.body.college_id;

  const newUser = new User({username,
 password,
 college_id,
});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
