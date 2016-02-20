'use strict';

import config 			from '../config';
import gulp 			from 'gulp';
import nightwatch 		from 'nightwatch';
import handleErrors 	from '../util/handleErrors';
import path 			from 'path';
import HtmlReporter 	from 'nightwatch-html-reporter';
import shell 			from 'gulp-shell';
import notify  			from "gulp-notify";
import gutil 		    from 'gulp-util';

gulp.task('e2e', (done) => {
	gutil.log(gutil.colors.blue('Started...', 'End-to-End Testing'))
	//nightwatch config path
	let nightwatchConfPath = path.resolve(__dirname, '../../', config.tests.e2e.e2eConf);
	//Init the nightwatch runer with configs
	new nightwatch.runner({
		config : nightwatchConfPath
	});
});