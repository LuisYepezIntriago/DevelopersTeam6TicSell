import customer from "../models/customer";

export const postCustomer = async (req, res) => {
  try {
    const newCustomer = new customer({
      customer: req.body.customer,
      name: req.body.name,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
      address: req.body.address,
      city: req.body.city,
      phone: req.body.phone,
    });
    const customerSaved = await newCustomer.save();
    res.json(customerSaved);
  } catch (err) {
    res.status(500).json({ error: `Customer don't create` });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const customers = await customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: `Customer don't found` });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await customer.findById(req.params.id);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: `Customer don't found` });
  }
};

export const updateCustomerById = async (req, res) => {
  const { id } = req.params;
  const customer = await customer.findByIdAndUpdate(id, { 
    $set: {
      customer: req.body.customer,
      name: req.body.name,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
      address: req.body.address,
      city: req.body.city,
      phone: req.body.phone,
    },
  });
  res.status(200).json({ message: "Customer updated" });
};

export const deleteCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    await customer.findByIdAndDelete(id);
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ error: `Customer with ${id} don't found` });
  }
};
