const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//model to store user data, currently name is not used but can be implemented further
const userSchema = new Schema ( {
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("userSchema", userSchema);