const mongoose = require("mongoose");

const ReposShema = new mongoose.Schema(
  {
    name: {
       type: String,
       required: true, 
    },
    forks: {
        type: Number,
        required: true,
    },
    full_name: {
        type: String,
        required: true
    },
    stargazers_count: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        requred: true
    },
    created_at: {
        type: String,
        required: true
    },
    html_url: {
        type: String,
        required: true, 
     },
     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
  }
);

export default mongoose.model("Repos", ReposShema);