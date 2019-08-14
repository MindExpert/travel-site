var gulp 	= require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars 	= require('postcss-simple-vars'),
	nested 		= require('postcss-nested'),
	cssImport 	= require('postcss-import'),
	mixins 		= require('postcss-mixins');

/* GULP PostCSS Filters */
gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) //post css filters
	.on('error', function (errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end'); //this task, tell(emit) to gulp that did what it could :/, and bring things to an end.
	})
	.pipe(gulp.dest('./app/temp/styles'));
});