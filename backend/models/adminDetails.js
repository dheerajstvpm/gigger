const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: String,
    password: String,
}, { timestamps: true })

module.exports = mongoose.model('Admin', adminSchema)

// [{"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false},
// {"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false},
// {"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false},
// {"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false},
// {"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false}]