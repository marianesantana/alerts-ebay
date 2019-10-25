const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
    email: {
		type: String,
		required: true,
	},
	frequency: {
		type: Number,
		required: true,
    },
    searchphrase: {
        type: String,
        required: true
    }
})