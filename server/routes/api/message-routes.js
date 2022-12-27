const router = require('express').Router();

const {
    getAllMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage
} = require('../../controllers/message-controller')

// Get all 

router.route('/')
.get(getAllMessages)

// Create a Message

router.route('/:userId')
.post(createMessage)

// Get, Put, Delete ONE

router.route('/:id')
.get(getMessageById)
.put(updateMessage)
.delete(deleteMessage)


module.exports = router;