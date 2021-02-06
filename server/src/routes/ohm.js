const router = require('express').Router();
const Utils = require('../utils');
const fs = require('fs');

router.get('/ohms/:trackingId', async(req, res) => {
  const ohm = await Utils.getOhmByTrackingId(req.params.trackingId);
  res.json(ohm);
})

router.post('/ohms/reason', (req, res) => {
  const {reason} = req.body;
  if (reason) {
    // save reason to a file
    fs.appendFile('failure-reason.txt', `${reason}\n`, (err) => {
      if (err) res.status(400).send('Something broke!');
      res.json({success: true});
    })
  }
})

module.exports = router;