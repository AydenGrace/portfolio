const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, default: "Guest" },
    email: String,
    subject: { type: String, default: "Portfolio - Contact" },
    content: String,
    date: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
