// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
        'jasmine',
        'browserify'
    ],
    files: [
        {pattern: 'unit/**/*spec.js'}
    ],
    exclude: [],
    preprocessors: {
        'unit/**/*.spec.js': ['browserify']
    },
    browserify: {
        debug: true,
        transform: [ 'babelify' ]
    },
    reporters: ['nyan'],
    nyanReporter: {
      suppressErrorReport: true,
      suppressErrorHighlighting: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: false,
    concurrency: Infinity
  })
}
