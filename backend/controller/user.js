const User = require("./../models/user");

exports.home = (req, res) => {
  res.status(200).json({
    message: "WELCOME FOR USER PAGE",
    error: "NOO",
    name: req.body.name,
    age: req.body.age,
  });
};
