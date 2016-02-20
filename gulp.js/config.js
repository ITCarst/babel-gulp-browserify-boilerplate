'use strict';

/*
* Browserify Config
* SASS Config
* Tests Config
* JS Config
* BrowserSync Config
* Images, HTML, GZIP, Fonts, Configs
*/
export default {
    //browserSync ports
    browserPort: 3000,
    UIPort: 3001,    
    //source and build dir
    sourceDir: './app/',
    buildDir: './build',
    //SASS src + dist
    styles: {
        src: './app/sass/**/*.scss',
        dest: './build/css',
        prodSourcemap: true,
        sassIncludePaths: [],
        autoprefixer: {
            browsers: [
              "last 3 version", 
              "safari 5", 
              'ie 8',
              'ie 9',
              'opera 12.1',
              'ios 6',
              'android 4'
            ],
            cascade: true
        },
        indentedSyntax: true,
        extensions: ["sass", "scss", "css", "less"]
    },
    //script files src + dist
    scripts: {
      src: './app/js/**/*',
      dest: './build/js'
    },
    //images src + dist
    images: {
      src: './app/imgs/**/*',
      dest: './build/imgs'
    },
    html: {
        src: './app/**/*.html',
        dest: './build/',
    },
    //fonts src + dist
    fonts: {
      src: './app/fonts/**/*',
      dest: './build/fonts'
    },
    //accepted extension type for assets
    assetExtensions: [
      'js',
      'css',
      'png',
      'jpe?g',
      'gif',
      'svg',
      'eot',
      'otf',
      'ttc',
      'ttf',
      'woff2?'
    ],
    gzip: { 
        src: './build/**/*.{html,xml,json,css,js,js.map,css.map}',
        options: {}
    },
    //browserify config
    browserify: {
        files: ['./app/js/**/*'],
        extensions: ['.js', '.jsx'],
        bundleName: 'app.js',
        outputName: 'bundle.js',
        prodSourcemap: true,
        debug: true,
        exclude: './app/js/libs/**/*.js'
    },
    //test config files 
    tests: {
        baseDir: './tests',
        e2e: {
            fixtures: '/e2e/fixtures/**/*.html',
            specs: '/e2e/specs/**/*.spec.js',
            e2eConf: './tests/nightwatch.json',
            reports: './tests/e2e/test_reports/specs/'
        },
        unit: {
            fixtures: '/unit/fixtures/**/*.html',
            specs: '/unit/specs/**/*.spec.js',
            karmaConf: './tests/karma.conf.js'
        }
    }

};
