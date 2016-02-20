'use strict'

/*
* Main entry point for gulp tasks
* Read the task folder and perform the requested task in defined order
* Pick's up default.js task
*/

import fs           from 'fs';
import gulp         from 'gulp';
import onlyScripts  from './util/scriptFilter';

// Require all tasks in gulp.js/tasks, including subfolders
//filter on scripts prevents loading hidden files etc.
const tasks = fs.readdirSync('./gulp.js/tasks/').filter(onlyScripts);

// Ensure process ends after all Gulp tasks are finished
gulp.on('stop', function () {
  if ( !global.isWatching ) {
    process.nextTick(function () { process.exit(0) });
  }
});

//run the tasks 
tasks.forEach((task) => { require('./tasks/' + task) });



