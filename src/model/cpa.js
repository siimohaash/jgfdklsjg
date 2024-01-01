const mongoose = require("mongoose");

const cpaSchema = new mongoose.Schema({
  active: Boolean,
  link: { type: String },

  isPublic: Boolean,
  byClicking: Boolean,
  showPopUp: Boolean,
  timePushAds: { type: Number, default: 3 },

  timeShowingPopUp: { type: Number, default: 3 },
  imgAds: { type: Buffer }
});

cpaSchema.methods.GenerateToken = async function () {};

cpaSchema.statics.findCridential = async function (email, password) {};
cpaSchema.pre("save", async function (next) {
  next();
});

const CpaModel = mongoose.models.cpa || mongoose.model("cpa", cpaSchema);

module.exports = CpaModel;
