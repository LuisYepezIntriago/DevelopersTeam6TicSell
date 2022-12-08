import Item from "../models/items";

export const postItems = async (req, res) => {
  try {
    const item = new Item({
      brand: req.body.brand,
      model: req.body.model,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    const ItemSaved = await item.save();
    res.status(201).json(ItemSaved);
  } catch (err) {
    res.status(500).json({ error: `Item don't create` });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: `Items don't found` });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: `Item don't found` });
  }
};

export const updateItemById = async (req, res) => {

    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(id, {
      $set: {
        brand: req.body.brand,
        model: req.body.model,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
      }
    });
    res.status(200).json({ message: `Item updated successfull` });
};

export const deleteItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndDelete(id);
    res.status(200).json({ message: `Item succesfully deleted` });
  } catch (err) {
    res.status(500).json({ error: `Item with ${id} don't found` });
  }
};
