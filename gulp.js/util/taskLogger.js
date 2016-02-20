'use strict'

/* taskLogger
 * ------------
 * Provides gulp style logs when a heavy task finished
 */
import gulp from 'gulp';
import gutil from 'gulp-util';
import notify from 'gulp-notify';

export default {
	start(task) {
		gutil.log('Task', gutil.colors.blue(task) + ' running...');
	},
	end(task) {
		gutil.log('Task', gutil.colors.green(task) + ' ended!');	
	}
	
}