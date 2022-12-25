const { User, Message } = require('../models');

const userController = {

    // Get All Users

    getAllUsers(req,res) {
        User.find({})
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },

    // Get User by ID

    getUserById({params}, res) {
        User.findOne({ _id: params.id })
        .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No User found with this id!' });
            return;
        }
        res.json(userData);
        })
        .catch(err => {
        console.log(err);
        res.status(400).json(err);
        });
    },

    // Create User

    createUser({ body}, res) {
        User.create(body)
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err))
    },

    // Update User

    updateUser({ params, body}, res) {
        User.findOneAndUpdate({ _id: params.id}, body, { new: true})
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(userData);
            })
            .catch(err => {
            console.log(err);
            res.status(400).json(err);
            });
    },

    // Delete User 

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(userData => {
            if (!userData) {
            res.status(404).json({ message: 'No User found with this id!' });
            return;
            }
            Message.deleteMany({ _id: { $in: userData.Messages } });
            res.json(userData);

        })
        .catch(err => res.status(400).json(err));
    },

};

module.exports = userController;