const ToppingModel = require("../../models/variation/Topping");

exports.getAllToppings = async () => {
    return await ToppingModel.find({});
}

exports.addTopping = async (topping) => {
    return await ToppingModel.create(topping);
}

exports.getToppingById = async (id) => {
    return await ToppingModel.findById(id);
}

exports.updateTopping = async (id, topping) => {
    return await ToppingModel.findByIdAndUpdate(id, topping);
}

exports.deleteTopping = async (id) => {
    return await ToppingModel.findByIdAndDelete(id);
}
