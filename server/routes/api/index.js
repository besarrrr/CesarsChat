const router = require('express').Router();

const messageRoutes = require('./message-routes');
const userRoutes = require('./user-routes')

router.use('/messages', messageRoutes);
router.use('/users', userRoutes)

module.exports = router;