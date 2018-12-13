const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const OrderSchema = new Schema(
  {
    name: String,
    time: Date,
    address: String,
    order: [String]
  },
  { timestamps: true }
);


module.exports = mongoose.model("Order", OrderSchema);