const main = require('../index');
const uplaodInventoryService = require("../services/upload");

const uploadInventoryController = async (req, res) => {
  try {
    const result = await uplaodInventoryService(
        require('path').resolve(__dirname, '..') + "/uploads/" + req.file.filename
    );
    if (typeof result === "string") {
      res.status(500).json({
        data: result,
      });
    } else {
      res.status(200).json({
        msg: "File successfully inserted!",
        file: req.file,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = uploadInventoryController;
