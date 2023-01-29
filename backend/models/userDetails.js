const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    mobile: String,
    profileImage: String,
    aboutMe: String,
    soloEventPricing: Number,
    bandEventPricing: Number,
    blockStatus: { type: Boolean, default: false },
    artistFlag: { type: Boolean, default: false },
    images: {
        type: [],
        default: []
    },
    tracks: [{ name: String, albumArt: String }],
    videos: [{ name: String, thumbnail: String }],
    contactRequests: [],
    eventBookings: [],
    favouriteTracks: [],
    favouriteArtists: [],
    favouriteVideos: [],
    requestedContacts: [],
    bookedHistory: []
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)