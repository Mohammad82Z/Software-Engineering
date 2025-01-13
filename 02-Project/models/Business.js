const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], default: 'closed' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;