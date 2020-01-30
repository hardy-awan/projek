const User = require('../models/signUpuser');
const bcrypt = require('bcrypt');
const _ = require('lodash');




exports.tambahUser  = async (req, res, next) => {
    let user = await User.findOne({ 
        email: req.body.email
       });
       if(user) return res.status(400).send('Email has been registered');

       user = new User(_.pick(req.body, ['nama_lengkap', 'alamat', 'email', 'password']));
       const salt = await bcrypt.genSalt(10);
       user.password = await bcrypt.hash(user.password, salt);
       await user.save();

       
       const token = user.generateAuthToken();
       res.header('x-auth-token', token).send(_.pick(user, ['_id', 'nama_lengkap', 'alamat', 'email']))
}