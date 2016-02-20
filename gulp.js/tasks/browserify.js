'use strict';

// Build Dependencies
import config 		from '../config';
import gulp 		from 'gulp';
import gulpif 		from "gulp-if";
import gutil 		from 'gulp-util';
import source       from 'vinyl-source-stream';
import sourcemaps   from 'gulp-sourcemaps';
import buffer       from 'vinyl-buffer';
import streamify    from 'gulp-streamify';
import watchify     from 'watchify';
import browserify   from 'browserify';
import babelify     from 'babelify';
import uglify       from 'gulp-uglify';
import debowerify   from 'debowerify';
import browserSync 	from 'browser-sync';
import handleErrors from '../util/handleErrors';
import bundleLogger from '../util/bundleLogger';


//main.js bundleled file
const file = config.browserify.bundleName;

//add or not file source maps
function createSourcemap() {
  return !global.isProd || config.browserify.prodSourcemap;
}

/*
* Creates the build script file from sources
* Bundles all the modules togheter into one file
* If is Prod env. don't enable debug mode
* Uses watchify for when the developer edits a file it will autmoatically build into the build file
*/
function buildScript(file, cb) {
	browserSync.notify('Compiling JavaScript');
    
	//config browserify
	let bundler = browserify({
	    entries: [config.sourceDir + 'js/' + file],
	    debug: createSourcemap(),
        dest: config.sourceDir + '/js',
        extensions: config.browserify.extensions,
        exclude: config.browserify.exclude,
        outputName: config.browserify.outputName,
        cache: {}, packageCache: {}, fullPaths: !global.isProd // Requirement of watchify
  	});

  	//js tranforms for using babel
  	const transforms = [
    	{ 'name':babelify, 'options': {presets: ['es2015']}},
    	{ 'name':debowerify, 'options': {}}
	];

	//enable bundles transform for babel and debowerfy
	transforms.forEach(function(transform) {
    	bundler.transform(transform.name, transform.options);
  	});

    //enable watchify only if is Dev env
    if ( !global.isProd ) {
        //watchify the bundler
        bundler = watchify(bundler);
        bundler.on('update', function() {
            rebundle();
            gutil.log('Rebundle...');
        });
        bundler.on('log', gutil.log)
    }

	function rebundle() {
		// Log when bundling starts
        bundleLogger.start(config.browserify.bundleName);
        //enable the steram bundler
		const stream = bundler.bundle();
		const sourceMapLocation = global.isProd ? './app/build/maps' : '';
  		
  	    return stream
  		    // Report compile errors
            .on('error', handleErrors)
			// Use vinyl-source-stream to make the
            // stream gulp compatible. Specifiy the desired output filename here.
  		    .pipe(source(config.browserify.outputName))
    		//creates sourcemaps if 
    		.pipe(gulpif(createSourcemap(), sourcemaps.write(sourceMapLocation)))
    		// Specify the output destination
    		.pipe(gulp.dest(config.scripts.dest)).on('end', reportFinished)
            //call the browser syncalso
            .pipe(browserSync.stream())
    		//report completion 
    		.on('end', reportFinished);
    }
	
    //trigger message that the build is finished
	let reportFinished = () => {
	   // Log when bundling completes
        bundleLogger.end(config.browserify.bundleName);
    }
    
    //return the rebundle for live editing
    return rebundle();
};

gulp.task("js", (cb) => {
	return buildScript(file, cb);
});
