'use strict';

import gulp 		from 'gulp';
import config 		from '../config';
import handleErrors from '../util/handleErrors';
import gutil 		from 'gulp-util';
import gulpSequence from 'gulp-sequence';
const copyTasks = ['copy-css-vendors', 'copy-js-vendors'];

//Will copy the folders from a location to other
gulp.task("copy", (cb) => {
	gulpSequence(copyTasks, cb);
});

gulp.task('copy-css-vendors', () => {
	return gulp.src(config.sourceDir + "/sass/vendors/**/*")
    	.pipe(gulp.dest(config.buildDir + "/css/vendors"))
    	.on("error", handleErrors);
});

gulp.task('copy-js-vendors', () => {
	return gulp.src(config.sourceDir + "/js/libs/**/*")
    	.pipe(gulp.dest(config.buildDir + "/js/libs"))
    	.on("error", handleErrors);
});
