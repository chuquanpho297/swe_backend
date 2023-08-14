const express = require("express");
const {
    getAllTransactions,
    addTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction,
} = require("../controllers/transaction");

const router = express.Router();

router.route("/").get(getAllTransactions).post(addTransaction);
router.route("/:id").get(getTransactionById).put(updateTransaction).delete(deleteTransaction);

module.exports = router;
