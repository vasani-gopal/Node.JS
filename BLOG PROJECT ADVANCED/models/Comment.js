const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, 'Please provide comment content'],
            trim: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        article: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article',
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
