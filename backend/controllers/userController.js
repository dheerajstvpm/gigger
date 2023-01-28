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
                    artistFlag: req.body.artistFlag,
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
            res.send({ loginError: "Invalid username" });
        } else {
            bcrypt.compare(req.body.password, user.password)
                .then(function (bcryptResult) {
                    if (bcryptResult) {
                        const payload = { subject: user._id }
                        const token = jwt.sign(payload, process.env.jwtKey)
                        res.send({ token })
                    } else {
                        res.send({ loginError: "Invalid password" })
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

const deleteTrack = async (req, res) => {
    console.log(req.body);
    console.log(req.userId);
    await User.updateOne({ _id: req.userId }, { $pull: { tracks: { _id: req.body._id } } })
}

const deleteVideo = async (req, res) => {
    console.log(req.body);
    console.log(req.userId);
    await User.updateOne({ _id: req.userId }, { $pull: { videos: { _id: req.body._id } } })
}

const imageUpload = async (req, res) => {
    const str = req.files.file0.name;
    const n = str.lastIndexOf('.');
    const fileExt = str.substring(n);
    const uniqueFileId = req.userId + fileExt
    fileName = './public/images/'
    try {
        await User.updateOne({ _id: req.userId }, { $set: { profileImage: uniqueFileId } })
        req.files.file0.mv(fileName + uniqueFileId);
        console.log('Image uploaded : ' + str);
    } catch (err) {
        console.log(err)
    }
}

const trackUpload = async (req, res) => {
    folderName = './public/tracks/'
    for (file of Object.values(req.files)) {
        try {
            fileName = req.userId + '_' + file.name
            await User.updateOne({ _id: req.userId }, { $push: { tracks: { name: fileName } } })
            await file.mv(folderName + fileName);
            console.log('Track uploaded : ' + fileName);
        } catch (err) {
            console.log(err)
        }
    }
}

const albumArtUpload = async (req, res) => {
    const albumArt = req.files.albumArt.name;
    console.log(albumArt);
    const str = req.files.file0.name;
    const n = str.lastIndexOf('.');
    const fileExt = str.substring(n);
    const trackName = req.files.albumArt.name;
    const uniqueFileId = trackName + fileExt;
    fileName = './public/albumArt/';
    try {
        await User.updateOne({ _id: req.userId, "tracks.name": trackName }, { $set: { "tracks.$.albumArt": uniqueFileId } })
        req.files.file0.mv(fileName + uniqueFileId);
        console.log('Image uploaded : ' + str);
    } catch (err) {
        console.log(err)
    }
}

const videoUpload = async (req, res) => {
    folderName = './public/videos/'
    for (file of Object.values(req.files)) {
        try {
            fileName = req.userId + '_' + file.name
            await User.updateOne({ _id: req.userId }, { $push: { videos: { name: fileName } } })
            await file.mv(folderName + fileName);
            console.log('Video uploaded : ' + fileName);
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = {
    userSignupPost,
    userLoginPost,
    bookingsGet,
    requestsGet,
    profileGet,
    imageUpload,
    trackUpload,
    albumArtUpload,
    videoUpload,
    deleteTrack,
    deleteVideo,
}