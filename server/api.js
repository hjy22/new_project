const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValue(req, res, next) {
    // console.log(req.body);
    var id = req.body.id, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [name, id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  addInfo(req, res, next) {
    var id = req.body.id, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.addInfo;
      connection.query(sql, [name, id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getStepperStatus(req, res, next) {
    var name = req.query.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getStepperStatus;
      connection.query(sql, [name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setStepperStatus(req, res, next) {
    var stepper = req.body.stepper, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setStepperStatus;
      connection.query(sql, [stepper,name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
}