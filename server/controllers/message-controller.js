const { User, Message } = require('../models');

const messageController = {

    // Get all Messages

    getAllMessages(req,res) {
        Message.find({})
        .then((messageData) => res.json(messageData))
        .catch((err) => res.status(400).json(err))
    },

    //Get Message by Id

    getMessageById ({params}, res) {
        Message.findOne({_id:params.id})
        .then (messageData => {
            if (!messageData) {
                res.status(404).json({ message: 'No Message found with this id!' });
                return;
            }
            res.json(messageData);
        })
        .catch((err) => res.status(400).json(err))
    },

    // Create a Message

    createMessage({ params, body}, res) {
        Message.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { messages: _id } },
                { new: true }
              );
        })
        .then (messageData => {
            if (!messageData) {
                res.status(404).json({ message: 'No Message found with this id!' });
                return;
            }
            res.json(messageData);
        })
        .catch((err) => res.status(400).json(err))
    },

    // Update a Message

    updateMessage({ params, body }, res) {
        Message.findOneAndUpdate(
          { _id: params.id },
          { $set: { message: body } },
          { new: true, runValidators: true }
        )
          .then(messageData => {
            if (!messageData) {
              res.status(404).json({ message: 'No Message found with this id!' });
              return;
            }
            res.json(messageData);
          })
          .catch(err => res.json(err));
      },

      // Delete Message

      deleteMessage({ params}, res) {
        Message.findOneAndDelete({ _id: params.id})
        .then(messageData => {
            if (!messageData) {
              res.status(404).json({ message: 'No Message found with this id!' });
              return;
            }
            res.json(messageData);
          })
          .catch(err => res.json(err));
      }
};

module.exports = messageController;