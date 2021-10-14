const mongoose = require("mongoose");
// mongoose schema
const Schema = mongoose.Schema;

// transaction schema (table) with name, value and date
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

// Transaction model
const Transaction = mongoose.model("Transaction", transactionSchema);

// export Transaction
module.exports = Transaction;