const { Schema, model } = require('mongoose');

const conversationSchema = new Schema(
    {
        members: {
            type:Array,
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }

);

const Conversation = model('Conversation', conversationSchema);

module.exports = Conversation;