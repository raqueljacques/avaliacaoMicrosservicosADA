const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    cpf: String,
    street: String,
    number: String,
    neighborhood: String,
    city: String,
    state: String,
    country: String,
    password: String,
    isAdmin: Boolean,
});

module.exports = mongoose.model("Users", UserSchema);
