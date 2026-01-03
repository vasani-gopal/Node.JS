const mongoose = require("mongoose");
const categoryschema = mongoose.Schema({
    title: {
        type: String
    }
});

const categorydata = mongoose.model("category", categoryschema);
module.exports = categorydata