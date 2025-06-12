const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // To associate tasks with a user
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
