const TransactionModel = require("../models/Transaction");

exports.getAllTransactions = async () => {
    return await TransactionModel.find({});
}

exports.addTransaction = async (transaction) => {
    return await TransactionModel.create(transaction);
}

exports.getTransactionById = async (id) => {
    return await TransactionModel.findById(id);
}

exports.updateTransaction = async (id, transaction) => {
    return await TransactionModel.findByIdAndUpdate(id, transaction);
}

exports.deleteTransaction = async (id) => {
    return await TransactionModel.findByIdAndDelete(id);
}
