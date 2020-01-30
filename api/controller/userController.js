const User = require('../models/user');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin')


exports.home = (req, res) => {
    res.send('Welcome to API SHOP')
}

exports.listUser = [auth, admin], async(req, res) => {
    let data = await User.find()
    .select(' _id username password email')
    .exec() 
    .then(docs => {
          const responses ={
              count: docs.length,
              user: docs
          };
          res.status(200).json(responses)
    })
    res.send(JSON.stringify({"status": 200, "error": null, "response": data}))
}

exports.detailUser = auth, async(req, res) => {
    const user = await User.findById(req.user._id).select('-password')
    res.send(user)
}
 
//  exports.tambahUser  = async (req, res, next) => {
//      let user = await User.findOne({ 
//          email: req.body.email,
//          username: req.body.username
//         });
//         if(user) return res.status(400).send('User udah ada goblok');

//         user = new User(_.pick(req.body, ['email', 'password', 'username']));
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(user.password, salt);
//         await user.save()

//         res.send(_.pick(user, ['_id', 'email', 'username']))
//  }

exports.ubahUser = auth, async (req, res) => {
    const {id} = req.user._id
    const status = await User.update({_id : id}, req.body)
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.hapusUser = [auth, admin], async (req, res) => {
    let {id} = req.params
    const status = await User.remove({_id:id})
    res.send(JSON.stringify({"status": 200, "error": null, "reponse": status}))
}

