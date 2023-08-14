const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../utils/validation");
const {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/user");
const uploadFile = require("../middleware/uploadFile");
const verifyToken = require("../middleware/verifyToken");
const imgurUpload = require("../middleware/imgurUpload");

const checkUser = (req, res, next) => {
  if (req.user.id === req.params.id) {
    next();
  } else {
    res.status(401).send("Access Denied");
  }
};

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const usernameExists = await User.findOne({ username: req.body.username });
  if (usernameExists) return res.status(400).send("username already exists");

  const phoneNumberExists = await User.findOne({
    phoneNumber: req.body.phoneNumber,
  });
  if (phoneNumberExists)
    return res.status(400).send("phone number has been used");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    password: hashedPassword,
    phoneNumber: req.body.phoneNumber,
  });

  try {
    await user.save();
    res.send({ id: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
  if (!user) return res.status(400).send("account not found");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("invalid password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.header("TOKEN", token).status(200).json({
    token: token,
    _id: user._id,
  });
});

router.route("/").get(getAllUsers);
router
  .route("/:id")
  .get(verifyToken, checkUser, getUserById)
  .put(
    verifyToken,
    checkUser,
    uploadFile.single("avatar"),
    imgurUpload,
    updateUser
  )
  .delete(verifyToken, checkUser, deleteUser);

module.exports = router;
