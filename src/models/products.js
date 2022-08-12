const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
})

const model = mongoose.model('products', schema)

module.exports = model