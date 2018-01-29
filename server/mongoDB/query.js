import mongoose from "mongoose";
import dotenv from "dotenv";

import Movie from "./mongoModels/movie";
import User from "./mongoModels/user";
import Review from "./mongoModels/review";
import Theatre from "./mongoModels/theatre";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
    user: process.env.MONGODB_USER_NAME,
    pass: process.env.MONGODB_USER_PWD,
    autoReconnect: true
});

export const createUser = ({ email, password }) => {
    const newUser = new User({
        Email: email
    });
    console.log(newUser);

    newUser.setPassword(password);
    return newUser.save();
};

export const searchMovie = title => {
    return Movie.find({ Title: new RegExp(title, "i") })
        .limit(10)
        .sort({
            Rank: 1
        });
};

export const findUserByEmail = Email => {
    return User.findOne({
        Email
    });
};

export const findReviewByMovie = Movie => {
    return Review.find({ Movie }).limit(10);
};

export const findShowByMovie = Movie => {
    return Theatre.find({ "Movie.Name": Movie });
};
