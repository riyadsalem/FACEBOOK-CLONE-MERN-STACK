const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validateEmail, validateLength } = require("../helpers/validation");

exports.register = async (req, res) => {
  try {
    if (!validateEmail(req.body.email)) {
      return res.status(400).json({
        message: "invalid email address",
      });
    }

    const check = await User.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({
        message:
          "This email address already exists,try with a different email address",
      });
    }

    if (!validateLength(req.body.first_name, 3, 30)) {
      return res.status(400).json({
        message: "first name must between 3 and 30 characters.",
      });
    }
    if (!validateLength(req.body.last_name, 3, 30)) {
      return res.status(400).json({
        message: "last name must between 3 and 30 characters.",
      });
    }
    if (!validateLength(req.body.password, 6, 40)) {
      return res.status(400).json({
        message: "password must be atleast 6 characters.",
      });
    }

    const cryptedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await new User({
      ...req.body,
      password: cryptedPassword,
    }).save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
