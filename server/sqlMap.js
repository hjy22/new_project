var sqlMap = {
    getValue: 'SELECT * FROM a WHERE id = ?',
    setValue: 'UPDATE a SET name = ? WHERE id = ?',
    addInfo: 'INSERT INTO ttt(name,id) VALUES (?,?)',
    getStepperStatus: 'SELECT * FROM stepperStatus WHERE name = ?',
    setStepperStatus: 'UPDATE stepperStatus SET stepper = ? WHERE name = ?',
    addGroup:'INSERT INTO test(name,AssessingGroup) VALUES (?,?)',
    getGroupInfo:'SELECT * FROM test',
    uploadDDL:'UPDATE courseInfo SET ddl = ? WHERE code = ?',
    getDDL:'SELECT * FROM courseInfo WHERE code = ?',
    saveFeedbackCheck:'UPDATE feedbackRating SET selected = ? WHERE name = ?',
    saveFeedbackText:'UPDATE feedbackText SET selected = ? WHERE name = ?',
  }
  
  module.exports = sqlMap;