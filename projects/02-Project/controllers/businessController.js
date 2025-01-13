const Business = require('../models/Business');

exports.createBusiness = async (req, res) => {
  const { name, status } = req.body;
  try {
    const business = new Business({
      name,
      status,
      owner: req.userId,
    });
    await business.save();
    res.status(201).json({ message: 'Business created', business });
  } catch (error) {
    res.status(500).json({ message: 'Error creating business', error });
  }
};

exports.updateBusinessStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const business = await Business.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!business) return res.status(404).json({ message: 'Business not found' });
    res.status(200).json({ message: 'Business status updated', business });
  } catch (error) {
    res.status(500).json({ message: 'Error updating business', error });
  }
};