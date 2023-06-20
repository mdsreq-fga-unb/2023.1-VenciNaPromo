const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    // unique user id
    _id:{
        type: schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    user_flag:  {
        type: Number,
        required: true,
        select: true,
        enum: [0, 1],
    },
    // user name
    name: {
        type: String,
        required: true,
    },
    // user email
    email: {
        type: String,
        lowercase: true,
        required: true,
    },
    // user password
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = User = mongoose.model("User", UserSchema);