const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const Db = "mongodb+srv://admin:Try2023Harder@cluster0.axqhaat.mongodb.net/test"
const client = {
    useNewUrlParser: true,
    useUnifiedTopology : true,
};

const connection = mongoose.connect(Db, client).then(() => console.log("Successfully connected to database")).catch((err)=> console.log(err));

module.exports = connection


