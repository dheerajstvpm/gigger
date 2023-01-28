const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer");
const { check, validationResult } = require('express-validator');

const userController = require('../controllers/userController')
const User = require("../models/userDetails")

const currentUser = {};

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
                    currentUser.id = req.userId
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
            return res.send({ signupError: 'User already exist' })
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
    const email = req.body.username
    currentUser[email] = (Math.floor(Math.random() * 1000) + '').padStart(4, '0')
    let info = await transporter.sendMail({
        from: '"Gigger" gigger@gigger.com',
        to: req.body.username,
        subject: "OTP verification",
        text: `Hi ${req.body.name}, OTP for email verification is ${currentUser[email]}`,
        html: `<h3>Hi ${req.body.name},</h3><b>OTP for email verification is ${currentUser[email]}</b>`,
    });
    console.log("Message sent: %s", info.messageId);
    // next()
    userController.userSignupPost(req, res)
}

const verifyOTP = async (req, res) => {
    const email = req.body.username
    if (req.body.otp !== currentUser[email]) {
        return res.send({ signupError: 'Invalid OTP' })
    } else {
        userController.userSignupPost(req, res)
    }
}

const onFileupload = async (req, res) => {
    console.log(req.path);
    console.log(req.files);
    console.log(currentUser.id);
    if (req.path === "/imageUpload") {

    }
    if (req.path === "/trackUpload") {

    }
    if (req.path === "/albumArtUpload") {
        const albumArt = req.files.albumArt.name;
        console.log(albumArt);
        const str = req.files.file0.name;
        const n = str.lastIndexOf('.');
        const fileExt = str.substring(n);
        const trackName = req.files.albumArt.name;
        const uniqueFileId = trackName + fileExt;
        fileName = './public/albumArt/';
        try {
            await User.updateOne({ _id: currentUser.id, "tracks.name": trackName }, { $set: { "tracks.$.albumArt": uniqueFileId } })
            req.files.file0.mv(fileName + uniqueFileId);
            console.log('Image uploaded : ' + str);
        } catch (err) {
            console.log(err)
        }
    }
    if (req.path === "/videoUpload") {
        folderName = './public/videos/'
        for (file of Object.values(req.files)) {
            try {
                fileName = currentUser.id + '_' + file.name
                await User.updateOne({ _id: currentUser.id }, { $push: { videos: { name: fileName } } })
                await file.mv(folderName + fileName);
                console.log('Video uploaded : ' + fileName);
            } catch (err) {
                console.log(err)
            }
        }
    }
}


module.exports = {
    OTPStatus,
    sendOTP,
    signupValidation,
    verifyOTP,
    // validToken,
    verifyToken,
    onFileupload,
}