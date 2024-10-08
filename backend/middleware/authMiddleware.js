import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const proctect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        } catch (err) {
            console.error(err);
            res.status(401)
            throw new Error('Sorry, Not Authorized here, invalid token')
        }
    }
    else {
        res.status(401)
        throw new Error('Sorry, Not Authorized here, go get the right token')
    }
})

export { proctect };

