import express from 'express';
const router = express.Router();

import {
    searchMovie,
    findUserByEmail,
    createUser
} from '../mongoDB/query';

router.get('/search', (req, res) => {
    searchMovie(req.query.title).then((movieList) => {
        if (movieList.length) res.status(200).json(movieList);
        else res.status(400).json({
            message: "NO SUCH MOVIE EXISTS...!!"
        });
    }).catch((err) => {
        res.status(404).json({
            message: err //"MOVIE COLLECTION ERROR..."
        });
    });;
});

router.post('/auth/signup', (req, res) => {
    const {
        email,
        password
    } = req.body;
    createUser({
            email,
            password
        }).then((userRecord) => {
            res.status(200).json(userRecord.toValidAuthJSON());
        })
        .catch((error) => {
            res.status(400).json({
                message: error
            }); //email already taken
        });

});

router.post('/auth/login', (req, res) => {
    const {
        email,
        password
    } = req.body;

    findUserByEmail(email).then((aUser) => {

        if (aUser && aUser.isValidPassword(password)) res.status(200).json(aUser.toValidAuthJSON());
        else res.status(400).json({
            message: "USER NOT PRESENT..."
        });
    }).catch((error) => {
        res.status(404).json({
            message: error
        }); //"USER COLLECTION ERROR..."
    });
});


export default router;