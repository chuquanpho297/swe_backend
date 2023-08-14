const express = require("express");
const {
    getAllToppings,
    addTopping,
    getToppingById,
    updateTopping,
    deleteTopping,
} = require("../../controllers/variation/topping");

const router = express.Router();

router.route("/").get(getAllToppings).post(addTopping);
router.route("/:id").get(getToppingById).put(updateTopping).delete(deleteTopping);

module.exports = router;
