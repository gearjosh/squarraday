const mongoose = require("mongoose");
const { Schema } = mongoose;

const squareSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  hoverText: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  guestArtist: {
    type: Boolean,
    required: true,
  },
  special: {
    type: Boolean,
    required: true,
  }
});

mongoose.model("squares", squareSchema);
