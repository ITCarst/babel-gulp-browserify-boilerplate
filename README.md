#babel-gulp-browserify-boilerplate
[![Build Status](https://travis-ci.org/IonutC/babel-gulp-browserify-boilerplate.svg?branch=master)](https://travis-ci.org/IonutC/babel-gulp-browserify-boilerplate)

###A boilerplate using Gulp, Babel, SASS, and Browserify. 
This boilerplate provides you with the code and conventions you need to get straight into building your Front-End app.
It allows you to use any other framework or library to build your app. 

---

###Basic usage:
 	- git clone https://github.com/IonutC/babel-gulp-browserify-boilerplate
	- cd babel-gulp-browserify-boilerplate
	- npm install
	- gulp

Check the gulp.js/tasks folder to see the available tasks. You can always create more tasks or improve the existing ones :)

#####If the above doesn't work try:
	- npm install babel-core, gulp, browserify, babel-cli, nightwatch, -g 

####Run the tests: 
    - gulp e2e
    - gulp unit
    - gulp unit-watch
    
There are two types of tests for this boilerplate:
    - unit test
    - end to end tests
   
For the e2e tests the boilerplate uses NightwatchJS. Why NightwatchJS and not Protractor?
Well this is a general boilerplate and Protractor is aimed more towards AngularJS as an e2e framework, it can also be used outside angular projects of course.

But I found that NightwatchJS goes well with other frameworks, and it's easy to setup and use.
In the bin folder you will find the selenium-driver jar file or e2e.

Unit tests run on Karma using Jasmine. You can also add chi, sinon etc.
 
All you have to do is run the npm install for chi, sinon, should etc.
Then in tets/karama.conf.js in frameworks array add the extra frameworks you want to use. 

---

####Using the boilerplate with ReactJS and Flux, the later is optional

You will need to add your ReactJS npm packages to the package.json file.

######Add the following to your package.json:
    - npm install babel-preset-react 
        - in .babelrc add to the array "react"
    - npm install react, react-dom, react-marked, react-router, reactify or any other required npm's for require
    - if you want to use Flux:  npm install flux
   
In config.js file the browserify config will also compile jsx files. And it will build it into the bundle.js file. 

It can work with ReactJS or Angular really easy. 

---

#####Required package versions:
	- node : ^4.x.x
	- npm : ^2.x.x
	- gulp : 
		- CLI : ^3.9.0 
		- local: ^3.9.0
	- babel : ^6.4.5
