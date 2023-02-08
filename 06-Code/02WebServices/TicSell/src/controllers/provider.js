import provider from "../models/providers";

export const postProviders = async (req, res) => {
  try {
    const newProvider = new provider({
      RUC: req.body.brand,
      ProviderName: req.body.model,
      Address: req.body.description,
      Phone: req.body.price,
      SellerName: req.body.quantity,
    });
    const providerSaved = await newProvider.save();
    res.status(201).json(providerSaved);
  } catch (err) {
    res.status(500).json({ error: `Provider don't create` });
  }
};

export const getProvider = async (req, res) => {
  try {
    const providers = await provider.find();
    res.status(200).json(providers);
  } catch (err) {
    res.status(500).json({ error: `Provider don't found` });
  }
};

export const getProviderById = async (req, res) => {
  try {
    const provider = await provider.findById(req.params.id);
    res.status(200).json(provider);
  } catch (err) {
    res.status(500).json({ error: `Provider don't found` });
  }
};

export const updateProviderById = async (req, res) => {

    const { id } = req.params;
    const provider = await provider.findByIdAndUpdate(id, {
      $set: {
        RUC: req.body.brand,
        ProviderName: req.body.model,
        Address: req.body.description,
        Phone: req.body.price,
        SellerName: req.body.quantity,
      }
    });
    res.status(200).json({ message: `Provider updated successfull` });
};

export const deleteProviderById = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await provider.findByIdAndDelete(id);
    res.status(200).json({ message: `Provider succesfully deleted` });
  } catch (err) {
    res.status(500).json({ error: ` Provider with ${id} don't found` });
  }
};