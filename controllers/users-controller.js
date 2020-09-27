const { User } = require('../models');

const userController = {
  
    getAllUser(req, res) {
        Thought.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    postUser(req, res) {
        user.post({})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'Already used username'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    getUserById() {
        user.findOne({ _id: params.id })
        .then(dbUserData => {
          // if no pizza is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData)
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    updateUser() {
        user.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    deleteUser() {
        user.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = userController