  const mongoose = require("mongoose");

  const QueAns = new mongoose.Schema(
    {
      Identifier: {
        type: String,
      },
      Answer: {
        type: String,
      },
    },
  );
  module.exports = mongoose.model("Message", QueAns);

