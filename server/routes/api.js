const express = require('express');
const jwt = require('jsonwebtoken')

const secretKey = 'your-secret-key';


const router = express.Router();

router.get('/token', (req, res)=>{
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Missing token' });
    }
  
    // Verify and decode the token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
      }
  
      // Token is valid, and decoded contains the payload
      
  
      // Your logic with the decoded payload
      res.json({ decoded });
    });
})

module.exports = router;