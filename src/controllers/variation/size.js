const sizeService = require("../../services/variation/size");

exports.getAllSizes = async (req, res) => {
    try {
        const sizes = await sizeService.getAllSizes();
        res.json({ data: sizes, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addSize = async (req, res) => {
    try {
        const size = await sizeService.addSize(req.body);
        res.json({ _id: size._id, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSizeById = async (req, res) => {
    try {
        const size = await sizeService.getSizeById(req.params.id);
        res.json({ data: size, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateSize = async (req, res) => {
    try {
        const size = await sizeService.updateSize(req.params.id, req.body);
        res.json({ data: size, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteSize = async (req, res) => {
    try {
        const size = await sizeService.deleteSize(req.params.id);
        res.json({ data: size, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};