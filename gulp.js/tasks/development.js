'use strict';

/*
* Default gulp tasks
*/
import gulp         from 'gulp';
import gulpSequence from 'gulp-sequence';

//dafault tasks
const defaultTasks = ['copy', 'js', 'styles', 'html','images', 'unit', 'e2e'];

gulp.task('dev', ['clean'], gulpSequence(defaultTasks));
