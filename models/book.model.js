const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
	name: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	phoneNumber : {
		type: String,
		required: true,
		trim: true
	},
	bookDate: { type: String },
	bookTime: { type: String },
	requiredInstruments: { type: [String] },
	purposeForBooking: { type: String },
	extraMessage: { type: String }
}, {
	timestamps: true,
});

module.exports = mongoose.model('Book', bookingSchema);