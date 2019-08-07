/*
	var gulp = require('gulp');
	var watch = require ('gulp-watch');
*/

/* we dont need to write var  each time we add a var, 
but instead we can separate them with a comma */

var gulp 	= require('gulp'),
	watch 	= require ('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');


gulp.task('default', function(){
	console.log("Testing my first Gulp Automation stuff");
});

gulp.task('html', function(){
	console.log("Testing Tasks, Something usefull for HTML");
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //post css filters
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	})
});