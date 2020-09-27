const { Thoughts } = require('../models');

const thoughtController = {
  
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    getThoughtById() {
        Thought.findOne({ _id: params.id })
        .then(dbThoughtData => {
          // if no pizza is found, send 404
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No Thoughts found with this id' });
            return;
          }
          res.json(dbThoughtData)
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    postThought() {

    },

    updateThought() {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thoughts found with this id!' });
            return;
          }
          res.json(dbThoughtsData);
        })
        .catch(err => res.status(400).json(err));
    },

    deleteThought() {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thoughts found with this id!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController