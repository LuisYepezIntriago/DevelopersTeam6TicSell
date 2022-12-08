import Bill from "../models/bills";

export const postBill = async (req, res) => {
  try {
    const newBill = new Bill({
      customer: req.body.billIdCustomer,
      aAddress: req.body.billAddress,
      phone: req.body.billPhone,
      email: req.body.billEmail,
      item: req.body.billItem,
      quantity: req.body.billQuantity,
      price: req.body.billPrice,
      subtotal: (req.body.billSubtotal = req.body.billQuantity * req.body.billPrice),
      iva: (req.body.billIva = 0.12 * req.body.billSubtotal),
      total: (req.body.billTotal = +req.body.billSubtotal + +req.body.billIva),
    });
    const billSaved = await newBill.save();
    res.json(billSaved);
  } catch (err) {
    res.status(500).json({ error: `Bill don't create` });
  }
};
