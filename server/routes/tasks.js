// routes/tasks.js
const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.post('/addTask', async (req, res) => {
  try {
    const { userId, title, description, dueDate } = req.body;
    const task = new Task(userId, title, description, dueDate);
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getUserTasks/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const userTasks = await Task.getUserTasks(userId);
    res.json(userTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/deleteTask/:taskId', async (req, res) => {

  const taskId = req.params.taskId;

  try {
    const result = await Task.deleteTask( taskId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
