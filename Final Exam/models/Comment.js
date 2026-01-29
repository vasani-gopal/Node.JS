const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'article',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const commentmodel = mongoose.model("comment", commentSchema)

module.exports = commentmodel
