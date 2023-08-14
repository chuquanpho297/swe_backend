const express = require("express");
const {
    getAllCategories,
    addCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
} = require("../../controllers/variation/category");

const router = express.Router();

router.route("/").get(getAllCategories).post(addCategory);
router.route("/:id").get(getCategoryById).put(updateCategory).delete(deleteCategory);

module.exports = router;
