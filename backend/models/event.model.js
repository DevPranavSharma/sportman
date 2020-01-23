const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventtitle: { type: String, required: true },
  eventvenue: { type: String, required: true },
  starttime: { type: Date, required: true },
  endtime:{ type: Date, required: true},
  totalseats: { type: Number, required: true },
  participants:[{type:String}]
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
