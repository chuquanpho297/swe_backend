const transactionService = require("../services/transaction");

exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await transactionService.getAllTransactions();
        res.json({ data: transactions, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addTransaction = async (req, res) => {
    try {
        const transaction = await transactionService.addTransaction(req.body);
        res.json({ _id: transaction._id, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await transactionService.getTransactionById(req.params.id);
        res.json({ data: transaction, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await transactionService.updateTransaction(req.params.id, req.body);
        res.json({ data: transaction, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await transactionService.deleteTransaction(req.params.id);
        res.json({ data: transaction, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
