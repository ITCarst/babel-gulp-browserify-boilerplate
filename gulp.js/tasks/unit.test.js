'use strict';

import gulp     from 'gulp';
import path     from 'path';
import config   from '../config';
import {Server} from 'karma';

let karmaConfPath = path.resolve(__dirname, '../../', config.tests.unit.karmaConf);

/* 
* Setup Karma for a single run 
* the rest of the config will be taken from karmaConfPath
*/
gulp.task('unit', (done) => {
	new Server({
    	configFile: karmaConfPath,
    	singleRun: true
  	}, done).start();
});

/*
* Task for when using gulp watch runs Karma continuously
*/
gulp.task('unit-watch', (done) => {
	new Server({
    	configFile: karmaConfPath
  	}, done).start();
});
