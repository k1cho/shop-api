const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    imageId: {
        type: String,
        default: 'sample.jpg'
    },
    imageVersion: {
        type: String,
        default: '1552902034'
    },
    title: String,
    description: String,
    price: Number,
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema)