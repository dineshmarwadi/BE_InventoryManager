const mongoose = require('mongoose')
const inventorySchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    store_id : Number,
    sku: String,
    product_name: String,
    price: Number,
    inventory_date: Date
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;