'use strict'

/* bundleLogger
 * ------------
 * Provides gulp style logs to the bundle method in browserify.js
 */
import gulp from 'gulp';
import gutil from 'gulp-util';
import notify from 'gulp-notify';
import prettyHrtime from 'pretty-hrtime';

let startTime;
/*
* In command line will show message for when the bundler starts to bundle the js files
* it will also show message when the bundle is done bundleing
*/
export default {
	start(filepath) {
		startTime = process.hrtime();
		gutil.log('Bundling', gutil.colors.green(`'bundle'`) + '...');
	},
	end(filepath) {
 		let taskTime = process.hrtime(startTime);
    	let prettyTime = prettyHrtime(taskTime);
    	gutil.log('Bundled', gutil.colors.green(`'bundle'`), 'in', gutil.colors.magenta(prettyTime));
	}
}
