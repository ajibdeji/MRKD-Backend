const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

  app.get(`/api/user`, async (req, res) => {
    let users = await User.find();
    return res.status(200).send(users);
  });

  app.post(`/api/userLogin`, async (req, res) => {
    console.log('Got a hit');
    var username = req.body.username;
    var password = req.body.password;

    console.log('username: '+username);
    console.log('password: '+password);


    var query  = User.where({ username , password });
    query.findOne(function (err, user) {
      if (err) console.log(err);
      if (user) {
        return res.status(200).send(user);
      }
    });
  });


  app.get(`/api/user/:id`, async (req, res) => {
    const {id} = req.params;
    let user = await User.findById(id);
    return res.status(200).send(user);
  });

  app.post(`/api/user/`, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const accountAddress = req.body.accountAddress;
    const privateKey = req.body.privateKey;

    var user =new User({
      username,accountAddress,privateKey,password
    });
    user.save(function (err, asset) {
      if (err) {
          return res.status(500).json({
              message: 'Error when creating asset',
              error: err
          });
      }
      return res.status(201).json(asset);
    });
  });

}