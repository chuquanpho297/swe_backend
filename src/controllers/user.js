const userService = require("../services/user");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ data: users, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  let userInfo;
//   console.log(req.body)
  if (req.body.imagePath !== undefined) {
    userInfo = {
      ...req.body,
      avatarPath: req.body.imagePath,
    };
  } else {
    userInfo = {
      ...req.body,
    };
  }
  delete userInfo.username;
  // console.log("userInfo :", userInfo);
  try {
    const user = await userService.updateUser(req.params.id, userInfo);
    console.log("return user :", user);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
