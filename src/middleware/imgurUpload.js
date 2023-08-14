const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const ApiError = require("../utils/apiError");
require("dotenv").config();

const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else resolve(data);
    });
  });
};

const imgurUploadImage = async (req, res, next) => {
  if (!req.file) return next();
  var data = new FormData();
  console.log(req.file);
  try {
    const formData = new FormData();
    // const data = await readFilePromise(req.file.path);
    const base64String = req.file.buffer.toString("base64");
    formData.append("image", base64String);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.imgur.com/3/image",
      headers: {
        Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
        ...formData.getHeaders(),
      },
      data: formData,
    };
    axios(config)
      .then(function (response) {
        // console.log(response.data.data);
        req.body.imagePath = response.data.data.link;
        next();
      })
      .catch(function (error) {
        throw Error(error.response.data.data.error);
      });
  } catch (err) {
    throw err;
  }
};

module.exports = imgurUploadImage;
