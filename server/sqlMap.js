var sqlMap = {
    getValue: 'SELECT * FROM a WHERE id = ?',
    setValue: 'UPDATE a SET name = ? WHERE id = ?',
    addInfo: 'INSERT INTO ttt(name,id) VALUES (?,?)',
    getStepperStatus: 'SELECT * FROM stepperStatus WHERE name = ?',
    setStepperStatus: 'UPDATE stepperStatus SET stepper = ? WHERE name = ?',
  }
  
  module.exports = sqlMap;