import Bill from "../models/bills";

export const postBill = async (req, res) => {
  try {
    const newBill = new Bill({
      customer: req.body.customer,
      name: req.body.name,
      lastname: req.body.lastname,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      item: req.body.item,
      quantity: req.body.quantity,
      price: req.body.price,
      subtotal: (req.body.subtotal = req.body.quantity * req.body.price),
      iva: (req.body.iva = 0.12 * req.body.subtotal),
      total: (req.body.total = req.body.subtotal + req.body.iva),
    });
    const billSaved = await newBill.save();
    res.json(billSaved);
  } catch (err) {
    res.status(500).json({ error: `Bill don't create` });
  }
};

export const getBill = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (err) {
    res.status(500).json({ error: `Bill don't found` });
  } 
};

export const getBillvById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    res.json(bill);
  } catch (err) {
    res.status(500).json({ error: `Bill don't found` });
  }
}

export const updateBillById = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findByIdAndUpdate(id, {
      $set: {
        customer: req.body.customer,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        item: req.body.item,
        quantity: req.body.quantity,
        price: req.body.price,
        subtotal: (req.body.subtotal = req.body.quantity * req.body.price),
        iva: (req.body.iva = 0.12 * req.body.subtotal),
        total: (req.body.total = req.body.subtotal + req.body.iva),
      },
    });
    res.status(200).json({ message: `Bill updated successfull` });
  } catch (err) {
    res.status(500).json({ error: `Bill with ${id} don't found` });
  }
}

export const deleteBillById = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findByIdAndDelete(id);
    res.status(200).json({ message: `Bill succesfully deleted` });
  } catch (err) {
    res.status(500).json({ error: `Bill with ${id} don't found` });
  }
}