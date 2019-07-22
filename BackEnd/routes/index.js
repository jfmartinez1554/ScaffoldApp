var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Scheduled Tasks
var cron = require('../ScheduledTasks/scheduled-tasks')
router.put('/task_1', cron.updateTask_1);
router.put('/task_2', cron.updateTask_2);
router.put('/task_3', cron.updateTask_3);

module.exports = router;
