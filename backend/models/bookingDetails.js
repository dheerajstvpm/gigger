const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    type:String,
    userId: String,
    artistId: String,
    bookingDate:Date,
    price:Number,
    bookingStatus: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model('Booking', bookingSchema)

// [{"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false},
// {"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false},
// {"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false},
// {"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false},
// {"type":"Auto Expo","userId":"lorem ipsum","artistId":"lorem ipsum","bookingDate":"2012-04-23T18:25:43.511Z","price":"2000","bookingStatus":false}]