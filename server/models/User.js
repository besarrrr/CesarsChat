const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true

        },
    }
);

// Create the User model using the UserSchema

const User = model('User', UserSchema);

//Export the User model

module.exports = User;