const mongoose = require('mongoose');

async function connectDatabase() {
    return new Promise((res, rej) => {
        const uri = 'mongodb://127.0.0.1:27017/user'
        mongoose.connect(uri, (err) => {
            if (err) {
                console.error("Error connecting to DataBase", err);
                return rej(err)
            }
            console.log("Successfully connected to database")
            res();
        })
    })
}
module.exports = connectDatabase;