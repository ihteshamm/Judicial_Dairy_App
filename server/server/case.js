const mongoose = require('mongoose')

const CaseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      code: {
        type: String,
        required: true
      },
      client: {
        type: String,
        required: true
      },
      lawyer: {
        type: String,
        required: true
      },
      court: {
        type: String,
        required: true
      },
      hearingDate: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      status: {
        type: Boolean,
        default: true,
      },
    });
    mongoose.model("cases",CaseSchema)