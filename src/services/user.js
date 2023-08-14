const UserModel = require("../models/User");

exports.getAllUsers = async () => {
  return await UserModel.find({});
};

exports.getUserById = async (id) => {
  return await UserModel.findById(id, {
    password: 0,
    dateCreated: 0,
    _id: 0,
    __v: 0,
  });
};

exports.updateUser = async (id, user) => {
  return await UserModel.findByIdAndUpdate(
    id,
    { $set: { ...user } },
    { new: true, select: { password: 0, dateCreated: 0 } }
  );
};

exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndDelete(id);
};
