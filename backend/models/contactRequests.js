const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const contactRequestsSchema = new Schema({
    userId: String,
    artistId: String,
    requestStatus: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model('Request', contactRequestsSchema)

// [{"userId":"lorem ipsum","artistId":"lorem ipsum","requestStatus":false},
// {"userId":"lorem ipsum","artistId":"lorem ipsum","requestStatus":false},
// {"userId":"lorem ipsum","artistId":"lorem ipsum","requestStatus":false},
// {"userId":"lorem ipsum","artistId":"lorem ipsum","requestStatus":false},
// {"userId":"lorem ipsum","artistId":"lorem ipsum","requestStatus":false}]