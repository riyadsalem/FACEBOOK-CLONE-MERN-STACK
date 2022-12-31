const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body).save();
    await post.populate("user", "first_name last_name cover picture username");
    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
