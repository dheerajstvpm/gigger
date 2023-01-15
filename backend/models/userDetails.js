const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    mobile: String,
    soloEventPricing: Number,
    bandEventPricing: Number,
    blockStatus: { type: Boolean, default: false },
    artistFlag: { type: Boolean, default: false },
    tracks:[],
    videos:[],
    contactRequests:[],
    eventBookings:[],
    favouriteTracks:[],
    favouriteArtists:[],
    favouriteVideos:[],
    requestedContacts:[],
    bookedHistory:[]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)