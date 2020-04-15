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
  addStepper(req, res, next) {
    var name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.addStepper;
      connection.query(sql, [name], (err, result) => {
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
  getMarking(req, res, next) {
    var name = req.query.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getMarking;
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
  addGroup(req, res, next) {
    var name = req.body.name, AssessingGroup = req.body.AssessingGroup;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.addGroup;
      connection.query(sql, [name,AssessingGroup], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getGroupInfo(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getGroupInfo;
      connection.query(sql, (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  uploadDDL(req, res, next) {
    var date = req.body.date, code = req.body.code;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.uploadDDL;
      connection.query(sql, [date,code], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getDDL(req, res, next) {
    var code = req.query.code;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getDDL;
      connection.query(sql, [code],(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  saveFeedbackCheck(req, res, next) {
    var selected = req.body.selected, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.saveFeedbackCheck;
      connection.query(sql, [selected,name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  saveFeedbackText(req, res, next) {
    var selected = req.body.selected, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.saveFeedbackText;
      connection.query(sql, [selected,name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getFeedbackCheck(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getFeedbackCheck;
      connection.query(sql,(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getFeedbackText(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getFeedbackText;
      connection.query(sql,(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  saveRatingToDB(req, res, next) {
    var id = req.body.id, name = req.body.name,content = req.body.content;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.saveRatingToDB;
      connection.query(sql, [id,name,content], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  saveTextToDB(req, res, next) {
    var id = req.body.id, name = req.body.name,content = req.body.content;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.saveTextToDB;
      connection.query(sql, [id,name,content], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setPreTime(req, res, next) {
    var PreTime = req.body.PreTime, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setPreTime;
      connection.query(sql, [PreTime,name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setMarkingTime(req, res, next) {
    var markingTime = req.body.markingTime, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setMarkingTime;
      connection.query(sql, [markingTime,name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setLocation(req, res, next) {
    var location = req.body.location, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setLocation;
      connection.query(sql, [location,name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setMarkingLocation(req, res, next) {
    var location = req.body.location, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setMarkingLocation;
      connection.query(sql, [location,name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  checkFeedback(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.checkFeedback;
      connection.query(sql, [id],(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getTextInfo(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getTextInfo;
      connection.query(sql, [id],(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  completeSubmission(req, res, next) {
    var completeSubmission = req.body.completeSubmission, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.completeSubmission;
      connection.query(sql, [completeSubmission,name], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getStudentID(req, res, next) {
    var name = req.query.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getStudentID;
      connection.query(sql, [name],(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  checkFeedbackUplaod(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.checkFeedbackUplaod;
      connection.query(sql,(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
}