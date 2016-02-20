'use strict';

import config 		from '../config';
import url 			from 'url';
import browserSync 	from 'browser-sync';
import gulp 		from 'gulp';

browserSync.create();

let reload = browserSync.reload;

gulp.task("browserSync", ['js', 'styles'], (done) => {

	const DEFAULT_FILE = './app/index.html';
	const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

	browserSync({
		server: {
			baseDir: './',
			middleware : (req, res, next) => {
				let fileHref = url.parse(req.url).href;
				if ( !ASSET_EXTENSION_REGEX.test(fileHref) ) req.url = '/' + DEFAULT_FILE;

        		return next();
			}
		},
		port: config.browserPort,
		ui: {
			port: config.UIPort
		},
		ghostMode: {
			clicks: true,
    		forms: true,
    		scroll: false,
    		links: false
		},
		browser: ["google chrome"],
		files: [
			config.sourceDir + '/sass/**/*.scss',
			config.sourceDir + '/js/**/*',
			config.sourceDir + '/imgs/**/*',
			config.sourceDir + '/fonts/**/*'
		]
	});

	//add watch tasks to browserSync so the live reload|update works on CSS, JS and HTML
	gulp.watch(config.html.src).on('change', reload);
	//CSS browser sync
	gulp.watch(config.styles.src, ['styles']).on('change', reload);
	//JS browser sync
	gulp.watch(config.scripts.src, ["js"]).on('change', reload);

	gulp.watch(config.tests.baseDir + "/unit/**/*", ["unit-watch"]);

});
