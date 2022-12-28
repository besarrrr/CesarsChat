const router = require('express').Router();

const {
    createConversation,
    getAllConversations
} = require('../../controllers/conversation-controller');

// Get all 

router.route('/')
.get(getAllConversations)

// Create a Message

router.route('/:id')
.post(createConversation)


module.exports = router;