const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    user1: String,
    user2: String,
    messages: [{ sender: String, message: String, time: { type: Date, default: Date.now } }],
}, { timestamps: true })

module.exports = mongoose.model('Chat', chatSchema)