const jwt = require("jsonwebtoken")
var bcrypt = require('bcryptjs');

const User = require("../models/userDetails")
const Booking = require("../models/bookingDetails")
const Request = require("../models/contactRequests")

const userSignupPost = async (req, res) => {
    if (req.body.otp === '') {
        res.send({ token: 'OTP sent' })
    } else {
        bcrypt.hash(req.body.password, 10)
            .then((hash) => {
                const user = new User({
                    artistFlag:req.body.artistFlag,
                    name: req.body.name,
                    username: req.body.username.toLowerCase(),
                    password: hash,
                })
                user.save()
                    .then((result) => {
                        console.log(result)
                        const payload = { subject: result._id }
                        const token = jwt.sign(payload, process.env.jwtKey)
                        res.send({ token })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

const userLoginPost = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            res.send({loginError:"Invalid username"});
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then(function (bcryptResult) {
                    if (bcryptResult) {
                        const payload = { subject: user._id }
                        const token = jwt.sign(payload, process.env.jwtKey)
                        res.send({ token })
                    } else {
                        res.send({loginError:"Invalid password"})
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    } catch (err) {
        console.log(err);
    }
}

const bookingsGet = async (req, res) => {
    try {
        const bookings = await Booking.find({})
        res.json(bookings)
    } catch (err) {
        console.log(err)
    }
}

const requestsGet = async (req, res) => {
    try {
        const requests = await Request.find({})
        res.json(requests)
    } catch (err) {
        console.log(err)
    }
}

const profileGet = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.userId })
        console.log(user);
        res.send(user)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    userSignupPost,
    userLoginPost,
    bookingsGet,
    requestsGet,
    profileGet
}