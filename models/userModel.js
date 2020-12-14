const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        twitterHandle: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
