const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: String,
    username: String,
    password: String,
    mobile: String,
    soloEventPricing: Number,
    bandEventPricing: Number,
    blockStatus: { type: Boolean, default: true },
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

module.exports = mongoose.model('Artist', artistSchema)