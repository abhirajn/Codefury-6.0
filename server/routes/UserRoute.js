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
      res.json({ message: 'User already exists' });
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      const token = jwt.sign({ username}, SECRET);
      res.json({ message: 'User created successfully', token });
    }
  });


  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username)
    const user = await User.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username}, SECRET);
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

  router.get('/counsillors' , async(req, res)=>{
    const response = await Counsellor.find({});
    res.send(response);
  })

  router.get('/questions' ,authenticateJwt ,async(req, res)=>{
    const response = await Question.find({});
    res.send(response);
  })

  router.get('/questions/:questiosId' ,authenticateJwt ,async(req, res)=>{
    const response = await Question.findById(req.params.questiosId)
// console.log(response)
    res.send(response);
  })

  router.post('/postQuestion' , authenticateJwt,async(req,res)=>{
    const {  title, description , comments } = req.body;
    const newques = new Question({ title, description , comments });
   newques.save();
   res.send("done");
  })
  router.post('/postComment' , authenticateJwt ,async(req,res)=>{
    const { id , comment } = req.body;
    try {
      // Find the item by ID
      const item = await Question.findById(id.props);
  
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      // Push the comment to the "comments" array
      item.comments.push(comment);
  
      // Save the updated item
      await item.save();
  
      res.send({ message: 'Comment added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal server error' });
    }
  })
  module.exports = router



