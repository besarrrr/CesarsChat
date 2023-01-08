const {Conversation } = require('../models');

const conversationController = {


  // Get all conversations

  getAllConversations(req,res) {
    Conversation.find({})
    .then((conversationData) => res.json(conversationData))
    .catch((err) => res.status(400).json(err))

  },


    // Creat Conversation

    createConversation(req, res) {
      
        const conversation = new Conversation({
          members: [req.body.senderId, req.body.receiverId]
          
        });
        conversation.save();
      
        res.send(conversation);
    },



}

module.exports = conversationController;
