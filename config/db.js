const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const DB = process.env.MONGO_URL
const connect = async () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`database connected successfully to ${mongoose.connection.host}`.rainbow)
    }).catch((error) => {
        console.log("error in database connection".bgRed, error)
        console.error(error)

    })

}
module.exports = connect