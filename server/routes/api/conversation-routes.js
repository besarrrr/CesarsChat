const router = require('express').Router();

const {
    createConversation,
    getAllConversations
} = require('../../controllers/conversation-controller');


// Create a Conversation using User ID, and get conversations using User Id

router.route('/:id')
.post(createConversation)
.get(getAllConversations)


module.exports = router;