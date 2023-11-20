const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        validator: [validator.isEmail, "Email is not valid"],
    },
    password: {
        type: String,
        trim: true,
        required. true,
        minlength: [8, "8 characters minimum"],
    },


},
{
    timestamps: true,
}
);
UserSchema.pre("Save, async function (next)") {
    try {
        
    } catch (error) {
        
    }
};

const User = mongoose.model("user", UserSchema);

module.exports = User
