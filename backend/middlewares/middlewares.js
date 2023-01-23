const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer");
const { check, validationResult } = require('express-validator');

const userController = require('../controllers/userController')
const User = require("../models/userDetails")


// const validToken = async (req, res, next) => {
//     try {
//         if (req.headers.authorization) {
//             let token = req.headers.authorization.split(" ")[1]
//             if (token !== 'null') {
//                 let payload = jwt.verify(token, process.env.jwtKey)
//                 if (payload) {
//                     return true
//                 }
//             }
//         } else {
//             return false
//         }
//     } catch (err) {
//         return false
//     }
// }

const verifyToken = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(" ")[1]
            if (token !== 'null') {
                let payload = jwt.verify(token, process.env.jwtKey)
                if (payload) {
                    req.userId = payload.subject
                    next()
                }
            }
        } else {
            return res.status(401).send('Unauthorized token request')
        }
    } catch (err) {
        return res.status(500).send('Invalid token')
    }
}

const signupValidation = async (req, res, next) => {
    signupErrors = validationResult(req);
    if (!signupErrors.isEmpty()) {
        return res.send(signupErrors)
    }
    try {
        console.log(req.body);
        user = await User.findOne({ username: req.body.username.toLowerCase() })
        if (user) {
            return res.send({signupError:'User already exist'})
        }
    } catch (err) {
        console.log(err);
    }
    next()
}

const OTPStatus = async (req, res) => {
    if (req.body.otp === '') {
        sendOTP(req, res)
    } else {
        verifyOTP(req, res)
    }
}

let random;
const sendOTP = async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.usernameSMTP,
            pass: process.env.passwordSMTP,
        },
    });
    random = (Math.floor(Math.random() * 1000) + '').padStart(4, '0')
    let info = await transporter.sendMail({
        from: '"Gigger" gigger@gigger.com',
        to: req.body.username,
        subject: "OTP verification",
        text: `Hi ${req.body.name}, OTP for email verification is ${random}`,
        html: `<h3>Hi ${req.body.name},</h3><b>OTP for email verification is ${random}</b>`,
    });
    console.log("Message sent: %s", info.messageId);
    // next()
    userController.userSignupPost(req, res)
}

const verifyOTP = async (req, res) => {
    if (req.body.otp !== random) {
        return res.send({signupError:'Invalid OTP'})
    }else{
        userController.userSignupPost(req, res)
    }
}

module.exports = {
    OTPStatus,
    sendOTP,
    signupValidation,
    verifyOTP,
    // validToken,
    verifyToken
}