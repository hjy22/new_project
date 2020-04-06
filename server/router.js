const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

router.post('/addInfo', (req, res, next) => {
  api.addInfo(req, res, next);
});

router.get('/getStepperStatus', (req, res, next) => {
  api.getStepperStatus(req, res, next);
});

router.post('/setStepperStatus', (req, res, next) => {
  api.setStepperStatus(req, res, next);
});

router.post('/addGroup', (req, res, next) => {
  api.addGroup(req, res, next);
});

module.exports = router;