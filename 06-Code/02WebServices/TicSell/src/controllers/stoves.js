import stoves from "../models/stoves";

export const postStoves = async (req, res) => {
  try {
    const newStove = new stoves({
      id: req.body.id,
      description: req.body.description,
      brand: req.body.brand,
    });
    const stoveSaved = await newStove.save();
    res.json(stoveSaved);
  } catch (err) {
    res.status(500).json({ error: `Stove don't create` });
  }
};

export const getStoves = async (req, res) => {
  try {
    const stovesList = await stoves.find();
    res.json(stovesList);
  } catch (err) {
    res.status(500).json({ error: `Stoves don't found` });
  }
};

export const getStoveById = async (req, res) => {
  try {
    const stove = await stoves.findById(req.params.id);
    res.json(stove);
  } catch (err) {
    res.status(500).json({ error: `Stove don't found` });
  }
}