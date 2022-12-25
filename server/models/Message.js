const { Schema, model } = require('mongoose');

const MessageSchema = new Schema(
    {

    messageText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
    },
    username: {
        type: String,
        required: true,
      },
    }
);

// Create the Message model using the ModelSchema

const Message = model('Message', MessageSchema);

//Export the Message model

module.exports = Message;