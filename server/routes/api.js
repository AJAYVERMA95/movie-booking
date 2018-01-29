import express from "express";
const router = express.Router();

import {
    searchMovie,
    findUserByEmail,
    createUser,
    findReviewByMovie
} from "../mongoDB/query";

router.get("/search", (req, res) => {
    const { title } = req.query;
    
    searchMovie(title)
        .then(movieList => {
            if (movieList.length) res.status(200).json(movieList);
            else
                res.status(400).json({
                    message: "NO SUCH MOVIE EXISTS...!!"
                });
        })
        .catch(err => {
            res.status(404).json({
                message: err //"MOVIE COLLECTION ERROR..."
            });
        });
});

router.post("/auth/signup", (req, res) => {
    const { email, password } = req.body;

    createUser({ email, password })
        .then(userRecord => {
            res.status(200).json(userRecord.toValidAuthJSON());
        })
        .catch(error => {
            res.status(400).json({ message: error }); //email already taken
        });
});

router.post("/auth/login", (req, res) => {
    const { email, password } = req.body;

    findUserByEmail(email)
        .then(aUser => {
            if (aUser && aUser.isValidPassword(password))
                res.status(200).json(aUser.toValidAuthJSON());
            else
                res.status(400).json({
                    message: "USER NOT PRESENT..."
                });
        })
        .catch(error => {
            res.status(404).json({
                message: error
            }); //"USER COLLECTION ERROR..."
        });
});

router.get("/review/:movie", (req, res) => {
    const movie = req.params.movie;

    findReviewByMovie(movie)
        .then(movieList => {
            res.status(200).json(movieList);
        })
        .catch(err => {
            res.status(404).json({
                message: err //"REVIEW COLLECTION ERROR..."
            });
        });
});

export default router;
