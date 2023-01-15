const jwt = require("jsonwebtoken")
const User = require("../models/userDetails")
const Booking = require("../models/bookingDetails")
const Request = require("../models/contactRequests")

const userSignupPost = async (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
        if (err) {
            console.log(err);
        } else {
            const payload = { subject: registeredUser._id }
            const token = jwt.sign(payload, process.env.jwtKey)
            res.send({ token })
        }
    })
}

const userLoginPost = async (req, res) => {
    let userData = req.body
    try {
        const user = await User.findOne({ username: userData.username })
        if (!user) {
            res.status(401).send("Invalid username")
        } else if (user.password !== userData.password) {
            res.status(401).send("Invalid password")
        } else {
            const payload = { subject: user._id }
            const token = jwt.sign(payload, process.env.jwtKey)
            res.send({ token })
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

    {
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.sendgridKey)
        const msg = {
            to: 'gigger@yopmail.com', // Change to your recipient
            from: 'gigger@yopmail.com', // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    }
    try {
        const user = await User.findOne({ username: req.userId })
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