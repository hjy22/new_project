var sqlMap = {
    getValue: 'SELECT * FROM test WHERE id = ?',
    setValue: 'UPDATE test SET name = ? WHERE id = ?',
    addValue: 'INSERT INTO test( id , name) values ( ?, ?)',
  }
  
  module.exports = sqlMap;