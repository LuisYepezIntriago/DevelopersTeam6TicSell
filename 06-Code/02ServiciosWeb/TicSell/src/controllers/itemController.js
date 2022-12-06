import Item from "../models/items";

export const postItems = async (req, res) => {
    try {
        const item = new Item({
            brand: req.body.brand,
            model: req.body.model,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity
        });
        const ItemSaved = await item.save();
        res.status(201).json(ItemSaved);
    } catch (err) {
        res.status(500).json({ error: `Item don't create` });
    }
    }