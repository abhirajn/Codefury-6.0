const express = require('express');
// const { authenticateJwt, SECRET } = require("../middleware/auth");
const {User} = require("../modals/User");
const { Counsellor } = require('../modals/Counsellors');
const { Question } = require('../modals/Questions');
const jwt = require('jsonwebtoken');
const { SECRET } = require("../middleware/auth")
const { authenticateJwt } = require("../middleware/auth");

const router = express.Router();



router.post('/signup', async (req, res) => {

    const { username, password } = req.body;
    console.log(req.body)
    const user = await User.findOne({ username });
    if (user) {
      res.status(403).json({ message: 'User already exists' });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ username}, SECRET);
      res.send({ message: 'User created successfully', token });
    }
  });


  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username)
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET);
      res.send({ message: 'Logged in successfully', token });
    } else {
      res.status(403).send({ message: 'Invalid username or password' });
    }
  });

  router.get('/counsillors' , async(req, res)=>{
    const response = await Counsellor.find({});
    res.send(response);
  })

  router.get('/questions' , async(req, res)=>{
    const response = await Question.find({});
    res.send(response);
  })

  router.get('/questions/:questiosId' , async(req, res)=>{
    const response = await Question.findById(req.params.questiosId)
console.log(response)
    res.send(response);
  })
  module.exports = router



