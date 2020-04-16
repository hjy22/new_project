var sqlMap = {
    addInfo: 'INSERT INTO studentInfo(name,id) VALUES (?,?)',
    getStepperStatus: 'SELECT * FROM stepperStatus WHERE name = ?',
    setStepperStatus: 'UPDATE stepperStatus SET stepper = ? WHERE name = ?',
    addGroup:"INSERT INTO schedule(name,AssessingGroup,Feedback) VALUES (?,?,'false')",
    getGroupInfo:'SELECT * FROM schedule',
    uploadDDL:'UPDATE courseInfo SET ddl = ? WHERE code = ?',
    getDDL:'SELECT * FROM courseInfo WHERE code = ?',
    saveFeedbackCheck:'UPDATE feedbackRating SET selected = ? WHERE name = ?',
    saveFeedbackText:'UPDATE feedbackText SET selected = ? WHERE name = ?',
    getMarking:'SELECT * FROM schedule WHERE name = ?',
    getFeedbackCheck:"SELECT * FROM feedbackRating WHERE selected = 'true'",
    getFeedbackText:"SELECT * FROM feedbackText WHERE selected = 'true'",
    saveRatingToDB:'INSERT INTO feedbackRatingInfo(id,name,content) VALUES (?,?,?)',
    saveTextToDB:'INSERT INTO feedbackTextInfo(id,name,content) VALUES (?,?,?)',
    setPreTime:'UPDATE schedule SET PreTime = ? WHERE name = ?',
    setMarkingTime:'UPDATE schedule SET MarkingTime = ? WHERE AssessingGroup = ?',
    setLocation:'UPDATE schedule SET PreLocation = ? WHERE name = ?',
    setMarkingLocation:'UPDATE schedule SET MarkingLocation = ? WHERE AssessingGroup = ?',
    checkFeedback:'SELECT * FROM feedbackRatingInfo WHERE id = ?',
    getTextInfo:'SELECT * FROM feedbackTextInfo WHERE id = ?',
    completeSubmission:'UPDATE stepperStatus SET completeSubmission = ? WHERE name = ?',
    getStudentID:'SELECT * FROM studentInfo WHERE name = ?',
    checkFeedbackUplaod:"SELECT * FROM feedbackRating WHERE selected = 'true'",
    addStepper:"INSERT INTO stepperStatus(name,stepper,completeSubmission) VALUES (?,'1','false')",
    setFeedbackDone:"UPDATE schedule SET Feedback = 'true' WHERE Name = ?"
  }
  
  module.exports = sqlMap;