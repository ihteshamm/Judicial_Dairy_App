const mongoose = require('mongoose')

const CaseRequestSchema = mongoose.Schema({
    client: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      lawyer: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      status: {
        type: String,
        required: true
      },
    
    });
    mongoose.model("CaseRequests",CaseRequestSchema)