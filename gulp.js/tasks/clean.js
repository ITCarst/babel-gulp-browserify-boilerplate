'use strict';

import config 		from '../config';
import gulp 		from 'gulp';
import gutil 		from 'gulp-util';
import del 			from 'del';
import notifier 	from 'gulp-notify';
import handleErrors from '../util/handleErrors';

//delete's the build folder with everything inside it
gulp.task('clean', (cb) => {
	return del([config.buildDir]).then(paths => {
		gutil.log(gutil.colors.blue('Deleted files and folders:\n'), gutil.colors.green(paths.join('\n')));
	}).catch(function (e) {
		gutil.log(gutil.colors.red('Clean Failed!', e));
  	});
})
