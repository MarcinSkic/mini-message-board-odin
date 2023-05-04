const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: String, required: true },
    added_at: { type: Date, default: new Date() }, //This default is hardcoded when creating model, so until the app stops it will always set the same date
});

module.exports = mongoose.model("Message", MessageSchema);
