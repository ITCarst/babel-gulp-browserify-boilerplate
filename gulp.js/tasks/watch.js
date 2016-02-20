'use strict';

import gulp 		from 'gulp';
import gulpWatch 	from 'gulp-watch';
import gulpSequence from 'gulp-sequence';
import browserSync 	from 'browser-sync';
import config 		from '../config';

let reload = browserSync.reload;

gulp.task("watch", ['images'], (cb) => {
    //html browser sync
	gulp.watch(config.html.src).on('change', reload);
	//CSS browser sync
	gulp.watch(config.styles.src, ['styles']).on('change', reload);
	//JS browser sync
	gulp.watch(config.scripts.src, ["js"]).on('change', reload);
	gulp.watch(config.tests.baseDir + "/unit/**/*", ["unit-watch"]);	
});