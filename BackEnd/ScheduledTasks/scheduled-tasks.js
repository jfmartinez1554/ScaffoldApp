var cron = require('node-cron');

// Executed every 10 minutes at America/Bogotá timezone.
var task_1 = cron.schedule('*/10 * * * *', () => { 
    console.log('Executing Task 1.');
}, {
    scheduled: true,
    timezone: "America/Bogota"
});

// Executed at 22:00 PM at America/Bogotá timezone.
var task_2 = cron.schedule('00 22 * * *', () => { 
    console.log('Executing Task 2.');
}, {
    scheduled: true,
    timezone: "America/Bogota"
});

// Executed at Midnight (24:00 AM) at America/Bogotá timezone.
var task_3 = cron.schedule('0 0 * * *', () => { 
  console.log('Executing Task 3.');
}, {
    scheduled: true,
    timezone: "America/Bogota"
});

// Start all the tasks by default (Could be converted to a service).
task_1.start();
task_2.start();
task_3.start();

// Services to update Task Schedule from Admin Dashboard
const updateTask_1 = (req, res) => {
    var validPeriod = cron.validate(req.body.period);
    if(task_1 && validPeriod) {
        task_1.stop();
        task_1 = new cron.schedule(req.body.period, () => {
            console.log('Executing modified Task 1.');
        }, {
            scheduled: true,
            timezone: "America/Bogota"
        });
        task_1.start();
        if(task_1) {
            res.status(200).json({
                error: false,
                message: "Scheduled Task 1 has been updated."
            });
        }
    } else {
        res.status(400).json({
            error: true,
            message: "Unvalid Cron Expression."
        });
    }
}

const updateTask_2 = (req, res) => {
    var validPeriod = cron.validate(req.body.period);
    if(task_2 && validPeriod) {
        task_2.stop();
        task_2 = new cron.schedule(req.body.period, () => {
            console.log('Executing modified Task 2.');
        }, {
            scheduled: true,
            timezone: "America/Bogota"
        });
        task_2.start();
        if(task_2) {
            res.status(200).json({
                error: false,
                message: "Scheduled Task 2 has been updated."
            });
        }
    } else {
        res.status(400).json({
            error: true,
            message: "Unvalid Cron Expression."
        });
    }
}

const updateTask_3 = (req, res) => {
    var validPeriod = cron.validate(req.body.period);
    if(task_3 && validPeriod) {
        task_3.stop();
        task_3 = new cron.schedule(req.body.period, () => {
            console.log('Executing modified Task 3.');
        }, {
            scheduled: true,
            timezone: "America/Bogota"
        });
        task_3.start();
        if(task_3) {
            res.status(200).json({
                error: false,
                message: "Scheduled Task 3 has been updated."
            });
        }
    } else {
        res.status(400).json({
            error: true,
            message: "Unvalid Cron Expression."
        });
    }
}

module.exports = {
    updateTask_1,
    updateTask_2,
    updateTask_3
}