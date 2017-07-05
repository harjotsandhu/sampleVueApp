var items = require('./Items.js');

exports.items = function (req, res) {
  res.json(items);
};

exports.item = function (req, res) {
  res.json(items[req.param.itemId]);
};
