// controllers/thoughtController.js
const Thought = require('../models/Thought.js');
const User = require('../models/User.js');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getThoughtById(req, res) {
    Thought.findById(req.params.thoughtId)
      .then((thought) =>
        thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this id' })
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
        User.findByIdAndUpdate(
          req.body.userId,
          { $push: { thoughts: thought._id } },
          { new: true }
        )
      )
      .then((user) =>
        user
          ? res.json({ message: 'Thought successfully created and associated with the user!' })
          : res.status(404).json({ message: 'Thought created, but no user found with this id' })
      )
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true, runValidators: true })
      .then((thought) =>
        thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this id' })
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.thoughtId)
      .then((thought) =>
        thought ? res.json({ message: 'Thought deleted!' }) : res.status(404).json({ message: 'No thought found with this id' })
      )
      .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { new: true, runValidators: true }
    )
      .then((thought) =>
        thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this id' })
      )
      .catch((err) => res.status(500).json(err));
  },
  removeReaction(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((thought) =>
        thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with this id' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
