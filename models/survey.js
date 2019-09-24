var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
  name: {
      type: String,
  },
  
  question: {
    type: String,
    required: [
        true,
        "This field cannot be blank"
    ],
    minlength: [
        8, 
        "Question must be a minimum of 8 characters"
    ]
},
  option1: {
    type: String,
    required: [
        true,
        "This field cannot be blank"
    ],
    minlength: [
        3,
        "Options must be a minimum of 3 characters"
    ]
},
option2: {
    type: String,
    required: [
        true,
        "This field cannot be blank"
    ],
    minlength: [
        3,
        "Options must be a minimum of 3 characters"
    ]
},
option3: {
    type: String,
    required: [
        true,
        "This field cannot be blank"
    ],
    minlength: [
        3,
        "Options must be a minimum of 3 characters"
    ]
},
option4: {
    type: String,
    required: [
        true,
        "This field cannot be blank"
    ],
    minlength: [
        3,
        "Options must be a minimum of 3 characters"
    ]
},
option1votes: {
    type: Number,
    default: 0
},
option2votes: {
    type: Number,
    default: 0
},
option3votes: {
    type: Number,
    default: 0
},
option4votes: {
    type: Number,
    default: 0
}
}, {timestamps: true });

var Survey = mongoose.model('Survey', SurveySchema);
module.exports = Survey;