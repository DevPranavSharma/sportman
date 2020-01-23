const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const eventtitle = req.body.eventtitle;
  const eventvenue = req.body.eventvenue;
  const starttime = Date.parse(req.body.starttime);
  const endtime =  Date.parse(req.body.endtime);
  const totalseats = Number(req.body.totalseats);
  const participants =[];
 

  const newEvent = new Event({
    eventtitle,
    eventvenue,
    starttime,
    endtime,
    totalseats,
    participants,
  });

  newEvent.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      const eventtitle = req.body.eventtitle;
  const eventvenue = req.eventvenue;
  const starttime = Date.parse(req.body.startdate);
  const endtime =  Date.parse(req.body.enddate);
  const totalseats = Number(req.body.totalseats);
  const participants = [];

      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
