const Inventory = require('../models/inventory.model')
const inventoryController = {
  getInventory: (req, res) => {
    Inventory.find({})
      .limit(20)
      .then((data) => {
        res.status(200).json({ data: data });
      });
  },
  getInventoryByParam: (req, res) => {
    const params = req.params;
    Inventory.find({"product_name" : {$regex: params.search, $options: 'i'}})
      .limit(20)
      .then((data) => {
        res.status(200).json({ data: data });
      });
  },
  editInventory: (req, res) => {
    const data = req.body;
    Inventory.findOneAndReplace({_id : data._id}, data).then(
        Inventory.find({}).then(result => {
            res.status(200).json({ data: result });
        })
    )
  },
};


module.exports = inventoryController;
