'use strict';

import config 		from '../config';
import gulp 		from 'gulp';
import gulpif 		from 'gulp-if';
import browserSync 	from 'browser-sync';
import sass 		from 'gulp-sass';
import sourcemaps   from 'gulp-sourcemaps';
import handleErrors from '../util/handleErrors';
import taskLogger 	from '../util/taskLogger';
import autoprefixer from 'gulp-autoprefixer';
import nano 		from 'gulp-cssnano';
import path 		from 'path';
import notify 		from 'gulp-notify';


gulp.task("styles", () => {
	browserSync.notify('Compiling SASS');

	const createSourcemap = !global.isProd || config.styles.prodSourcemap;

	return gulp.src(config.styles.src)
		.pipe(gulpif(createSourcemap, sourcemaps.init())).on('error', handleErrors)
		.pipe(sass({
			sourceComments: !global.isProd,
			outputStyle: global.isProd ? 'compressed' : 'nested',
			includePaths: config.styles.sassIncludePaths,
			extensions: config.styles.extensions
		})).on('error', handleErrors)
		.pipe(autoprefixer(config.styles.autoprefixer))
		.pipe(gulpif(createSourcemap, sourcemaps.write('maps'))).on('error', handleErrors)
		.pipe(gulp.dest(config.styles.dest))
		.pipe(notify({message : "SCSS completed"}));
});