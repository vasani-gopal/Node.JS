const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String, 
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'article'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const usermodel = mongoose.model("user", userSchema)

module.exports = usermodel
