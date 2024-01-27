
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');  
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks'); 
const apiRoutes = require('./routes/api');


const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes); 
app.use('/api', apiRoutes); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});