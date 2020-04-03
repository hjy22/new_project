var sqlMap = {
    getValue: 'SELECT * FROM a WHERE id = ?',
    setValue: 'UPDATE a SET name = ? WHERE id = ?',
    addValue: 'INSERT INTO ttt(name,id) VALUES (?,?)',
  }
  
  module.exports = sqlMap;