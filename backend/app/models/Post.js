const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    movieId: {
      type: String,
      required: true,
    },
    spoiler: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 500,
    },
    vote: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
