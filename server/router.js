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

router.get('/getMarking', (req, res, next) => {
  api.getMarking(req, res, next);
});

router.post('/saveRatingToDB', (req, res, next) => {
  api.saveRatingToDB(req, res, next);
});

router.post('/saveTextToDB', (req, res, next) => {
  api.saveTextToDB(req, res, next);
});

router.post('/setPreTime', (req, res, next) => {
  api.setPreTime(req, res, next);
});

router.post('/setMarkingTime', (req, res, next) => {
  api.setMarkingTime(req, res, next);
});

router.post('/setLocation', (req, res, next) => {
  api.setLocation(req, res, next);
});

router.post('/setMarkingLocation', (req, res, next) => {
  api.setMarkingLocation(req, res, next);
});

router.get('/checkFeedback', (req, res, next) => {
  api.checkFeedback(req, res, next);
});

router.get('/getTextInfo', (req, res, next) => {
  api.getTextInfo(req, res, next);
});


module.exports = router;