const jwt = require("jsonwebtoken")
const User = require("../models/userDetails")
const Booking = require("../models/bookingDetails")
const Request = require("../models/contactRequests")

const verifyToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorised request')
    }
    let token = req.headers.authorization.split(" ")[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorised request')
    }

    try {
        let payload = jwt.verify(token, process.env.jwtKey)
        if (!payload) {
            return res.status(401).send('Unauthorized request')
        }
        req.userId = payload.subject
        next()
    } catch (err) {
        return res.status(500).send('Invalid token')
    }
}

module.exports = {
    verifyToken
}