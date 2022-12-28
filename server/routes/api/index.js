const router = require('express').Router();

const messageRoutes = require('./message-routes');
const userRoutes = require('./user-routes');
const conversationRoutes = require('./conversation-routes');

router.use('/messages', messageRoutes);
router.use('/users', userRoutes);
router.use('/conversations', conversationRoutes);

module.exports = router;