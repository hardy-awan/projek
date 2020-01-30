const User = require('../models/signUpuser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.loginUser = async (req, res) => {
  let user = await User.findOne({
      email: req.body.email
  });
  if (!user) return res.status(400).send('Invalid Email or Password');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Email salah')

  const token = jwt.sign({_id: user._id}, 'jwtPrivateKey');
  res.send(token)
}