const express = require('express');
// const { authenticateJwt, SECRET } = require("../middleware/auth");
const {User} = require("../modals/User");
const { Counsellor } = require('../modals/Counsellors');
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
      const token = jwt.sign({ username, role: 'user' }, SECRET);
      res.json({ message: 'User created successfully', token });
    }
  });


  router.post('/login', async (req, res) => {
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, SECRET);
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

  router.get('/counsillors' , async(req, res)=>{
    const response = await Counsellor.find({});
    res.send(response);
  })

  module.exports = router



