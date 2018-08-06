var gulp = require('gulp');
var pm2 = require('pm2');

gulp.task('start', function () {
    pm2.connect(true, function () {
        pm2.start({
            name: 'server',
            script: 'index.js',
        }, function () {
            console.log('pm2 started');
            pm2.streamLogs('all', 0);
        });
    });
});