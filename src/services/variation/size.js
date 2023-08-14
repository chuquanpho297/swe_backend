const SizeModel = require("../../models/variation/Size");

exports.getAllSizes = async () => {
    return await SizeModel.find({});
}

exports.addSize = async (size) => {
    return await SizeModel.create(size);
}

exports.getSizeById = async (id) => {
    return await SizeModel.findById(id);
}

exports.updateSize = async (id, size) => {
    return await SizeModel.findByIdAndUpdate(id, size);
}

exports.deleteSize = async (id) => {
    return await SizeModel.findByIdAndDelete(id);
}
