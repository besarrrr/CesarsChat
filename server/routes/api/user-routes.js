const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,

} = require('../../controllers/user-controller')

// Get All Users and create a user

router.route('/')
.get(getAllUsers)
.post(createUser)

// Get, Put, Delete One

router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

module.exports = router;