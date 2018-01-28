import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        unique: true
    },
    PasswordHash: {
        type: String,
        required: true
    },
    Bookings: [{
        Movie: String,
        TheatreName: String,
        ShowTime: String,
        Price: Number,
        Date: Date
    }]
});

UserSchema.methods.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.PasswordHash);
}

UserSchema.methods.generateJWToken = function () {
    return jwt.sign({
        email: this.Email
    }, process.env.JWTKEY);
}

UserSchema.methods.toValidAuthJSON = function () {
    return {
        email: this.Email,
        bookings: this.Bookings,
        token: this.generateJWToken()
    }
}

export default mongoose.model("User", UserSchema);