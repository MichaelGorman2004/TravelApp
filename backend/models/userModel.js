const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//model to store user data, currently name is not used but can be implemented further
const userSchema = new Schema ( {
    //email but storing as _id
    _id: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    pfpUrl: {
        type: String,
        required: false
    },
    distanceTraveled: {
        type: Number,
        required: true
    },
    townsVisited: {
        type: Number,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
        }
    }
}, {timestamps: true});

module.exports = mongoose.model("userSchema", userSchema);