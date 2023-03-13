const moment = require("moment");
const csv = require("fast-csv");
const Inventory = require("../models/inventory.model");
const fs = require("fs");



const uplaodInventoryService = async (csvUrl) => {
    let stream = fs.createReadStream(csvUrl);
    let dataSet = [];
    let csvFileStream = csv
      .parse()
      .on("data", function (data) {
        if (data && data[0] !== "id" && data !== []) {
          const res = validate(data);
          if (typeof res === "string") {
            // Error occured
            return res;
          } else {
            dataSet.push(res);
          }
        }
      })
      .on("end", function () {
        if (dataSet.length > 0) {
          Inventory.insertMany(dataSet).then((res) => {
            return true;
          });
        } else {
          return "No Record";
        }
      });
    stream.pipe(csvFileStream);
  };

  function validate(data) {
    let error;
    let obj = {};
    if (!isNaN(data[0])) obj["id"] = +data[0];
    else error += `_id is invalid ${data[0]} \n`;
  
    if (!isNaN(data[1])) obj["store_id"] = +data[1];
    else error += `store_id is invalid ${data[1]} \n`;
  
    if (typeof data[2] === "string" && data[2].length === 32)
      obj["sku"] = data[2];
    else error += `sku is invalid ${data[2]} \n`;
  
    if (typeof data[3] === "string" && data[3].length > 0)
      obj["product_name"] = data[3];
    else error += `product_name is invalid ${data[3]} \n`;
  
    if (!isNaN(data[4])) obj["price"] = +data[4];
    else error += `price is invalid ${data[4]} \n`;
  
    if (moment(data[5], "YYYY-MM-DD", true).isValid())
      obj["inventory_date"] = new Date(data[5]);
    else error += `inventory date is invalid ${data[5]} \n`;
  
    return error ? error : obj;
}

  module.exports = uplaodInventoryService;