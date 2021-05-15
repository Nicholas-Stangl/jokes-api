const mongoose = require("mongoose")


const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required:[true, "Setup is required!"],
        minLength: [3, "Setup content must be at least 3 chars"],
        maxLength: [1000, "Setup too long, you're audience is asleep"]
    },

    punchline:{
        type: String,
        required:[true, "Punchline is required!"],
        minLength: [3, "Punchline content must be at least 3 chars"],
        maxLength: [1000, "Punchline too long, we forgot the Setup now"]
    }

}, {timestamps:true})


const Joke = mongoose.model("Joke", JokeSchema );

module.exports = Joke;