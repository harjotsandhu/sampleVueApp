var Items = require('./Items.js');

exports.items = function (req, res) {
  res.json(Items);
};

exports.item = function (req, res) {
  res.json(Items[req.param.itemId]);
};
