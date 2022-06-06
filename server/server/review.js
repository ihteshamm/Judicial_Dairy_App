const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    lawyer: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    }
});
mongoose.model("reviews", ReviewSchema)