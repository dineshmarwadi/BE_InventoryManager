const express = require('express');
const upload = require('./utils.js/multerConfig');
const uploadInventoryController = require('./controller/uploadInventory');
const inventoryController = require('./controller/inventoryController');
const router = express.Router();

router.post("/uploadcsv", upload.single('uploadcsv'), uploadInventoryController);
router.get('/getInventory', inventoryController.getInventory);
router.get('/getInventory/:search', inventoryController.getInventoryByParam);
router.put('/editInventory', inventoryController.editInventory);


module.exports = router;