//gulp
var gulp 		= require('gulp');
var util 		= require("gulp-util");
var watch 		= require("gulp-watch");
var notify 		= require("gulp-notify");
var del 		= require("del")
var rename 		= require("gulp-rename");
var open 		= require("open");
 
//browserify
var browserify 	= require('browserify');
var source 		= require('vinyl-source-stream');
var watchify 	= require('watchify');

//prefix
var prefix 		= require("gulp-autoprefixer"); 

//source maps
var sourcemaps = require("gulp-sourcemaps");

//file changed
var filechange 	= require("gulp-changed");
var filesize 	= require("gulp-filesize");
var sizereport 	= require("gulp-sizereport");

//minify html, img, cssnano
var htmlmin 	= require("gulp-htmlmin");
var imagemin 	= require("gulp-imagemin");
var cssnano 	= require("gulp-cssnano");
var uglify 		= require("gulp-uglify");

//fonts
var iconfont 	= require("gulp-iconfont");
var svgstore 	= require("gulp-svgstore");

//css
var sass 		= require("gulp-sass");

//browser sync
var browsersync = require('browser-sync');

//sequence
var sequence = require("gulp-sequence");

//TASKSSSSS!!!
//default 
//production
//server
//watchify
//test