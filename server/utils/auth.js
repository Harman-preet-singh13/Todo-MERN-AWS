
const jwt = require('jsonwebtoken');


function generateToken(user) {
  return jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '12h' });
}

function verifyToken(token) {
  return jwt.verify(token, 'your-secret-key');
}

module.exports = { generateToken, verifyToken };
