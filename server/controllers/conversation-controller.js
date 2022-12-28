const { User, Message, Conversation } = require('../models');

const conversationController = {


  // Get all conversations

  getAllConversations(req,res) {
    Conversation.find({})
    .then((conversationData) => res.json(conversationData))
    .catch((err) => res.status(400).json(err))

},


    // Creat Conversation

    createConversation(req, res) {
        const { users, messages } = req.body;
        const conversation = new Conversation({
          users,
          messages
        });
        conversation.save();
      
        res.send(conversation);
    },



}

module.exports = conversationController;
