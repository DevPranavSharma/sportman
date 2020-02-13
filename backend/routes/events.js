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
 
  Event.checkVenue(req, (error, response) => {
    if (response.length > 0) {
        var prevStart = Date.parse(response[0].starttime.toString())
        var prevEnd = Date.parse(response[0].endtime.toString())

        console.log("Prev Start" + prevStart)

        var newStart = starttime.toString()
        var newEnd =  endtime.toString()


        if((newStart<prevStart && newEnd<prevStart) || (newStart >prevEnd && newEnd > prevEnd)){
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
        }
        else{
          return res.status(404).send()
        }
      }
        else {
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
        }

});
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
  console.log(req.body);
  Event.findById(req.params.id)
    .then(event => {
  //     event.eventtitle = "hhhhhhh";
  // event.eventvenue = req.eventvenue;
  // event.starttime = Date.parse(req.body.startdate);
  // event.endtime =  Date.parse(req.body.enddate);
  // event.totalseats = Number(req.body.totalseats);
  event.participants = req.body.participants;
  
      event.save()
        .then(() => res.json('Event updated!'+     console.log(event)
        ))
        .catch(err => res.status(400).json('Error: ' + err));
  })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;