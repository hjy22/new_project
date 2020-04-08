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

router.get('/getGroupInfo', (req, res, next) => {
  api.getGroupInfo(req, res, next);
});

router.post('/uploadDDL', (req, res, next) => {
  api.uploadDDL(req, res, next);
});

router.get('/getDDL', (req, res, next) => {
  api.getDDL(req, res, next);
});

router.post('/saveFeedbackCheck', (req, res, next) => {
  api.saveFeedbackCheck(req, res, next);
});

router.post('/saveFeedbackText', (req, res, next) => {
  api.saveFeedbackText(req, res, next);
});

router.get('/getFeedbackCheck', (req, res, next) => {
  api.getFeedbackCheck(req, res, next);
});

router.get('/getFeedbackText', (req, res, next) => {
  api.getFeedbackText(req, res, next);
});




module.exports = router;