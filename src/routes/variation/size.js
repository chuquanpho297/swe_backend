const express = require("express");
const {
    getAllSizes,
    addSize,
    getSizeById,
    updateSize,
    deleteSize,
} = require("../../controllers/variation/size");

const router = express.Router();

router.route("/").get(getAllSizes).post(addSize);
router.route("/:id").get(getSizeById).put(updateSize).delete(deleteSize);

module.exports = router;
