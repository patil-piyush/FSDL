const mongoose = require("mongoose");

const dbconnect = (url) => {
    try {
        mongoose.connect(url)
            .then(console.log("DB connection successful!!"))
    } catch (error) {
        console.log(`error connecting db - ${error}`);
    }
}

module.exports = dbconnect;