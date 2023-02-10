const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    mobile: String,
    profileImage: String,
    aboutMe: String,
    eventPricing: Number,
    blockStatus: { type: Boolean, default: false },
    artistFlag: { type: Boolean, default: false },
    images: {
        type: [],
        default: []
    },
    tracks: [{ name: String, albumArt: String, title: String }],
    videos: [{ name: String, thumbnail: String, title: String }],
    eventBookings: [{ userId: String, artistId: String, bookingDate: String, payment: Number, isConfirmed: Boolean }],
    favouriteTracks: [],
    favouriteArtists: [],
    favouriteVideos: [],
    bookedHistory: []
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)