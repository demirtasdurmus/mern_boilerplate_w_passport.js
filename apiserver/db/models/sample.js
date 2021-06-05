const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: false,
        min: 0
    },
    is_available: {
        type: Boolean,
        required: false,
    }
})

const Sample = mongoose.model("Sample", sampleSchema);

module.exports = Sample;