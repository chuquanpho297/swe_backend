const toppingService = require("../../services/variation/topping");

exports.getAllToppings = async (req, res) => {
    try {
        const toppings = await toppingService.getAllToppings();
        res.json({ data: toppings, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addTopping = async (req, res) => {
    try {
        const topping = await toppingService.addTopping(req.body);
        res.json({ _id: topping._id, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getToppingById = async (req, res) => {
    try {
        const topping = await toppingService.getToppingById(req.params.id);
        res.json({ data: topping, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateTopping = async (req, res) => {
    try {
        const topping = await toppingService.updateTopping(req.params.id, req.body);
        res.json({ data: topping, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTopping = async (req, res) => {
    try {
        const topping = await toppingService.deleteTopping(req.params.id);
        res.json({ data: topping, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};