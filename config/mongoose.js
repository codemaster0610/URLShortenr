const mongoose = require('mongoose')

const db = mongoose.connection

mongoose.connect('mongodb://localhost/url-shortener')

db.on('error', () => {
    console.log('mongodb is error!')
})

db.once('open', () => {
    console.log('mongodb is connected!')
})

module.exports = db