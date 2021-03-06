const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const OrderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Required!"],
      maxlength: [30, "Too Long!"]
    },
    time: {
      type: String,
      required: [true, "Required!"]
    },
    address: {
      type: String,
      required: [true, "Required!"]
    },
    order: {
      type: [String],
      required: [true, "Required!"]
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Order", OrderSchema);