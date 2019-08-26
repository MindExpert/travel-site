var gulp 	= require('gulp'),
	watch 	= require ('gulp-watch'),
	browserSync = require('browser-sync').create();

/* GULP WATCH TASK */
gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app" 
			/* since gulpfile.js is in our root travel-site, we need to tell browserSync to go to app folder because thats where our  index.html file lives. */
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function () {
		gulp.start('scriptsRefresh');
	})

}); 

/* GULP CSS Auto Inject  TASK */
/* 	Before we run cssInject, we run any dependencies (which is the second argument). 
	Styles task is a dependencie of cssInject task  SHORT: Anytime we save a change to any css file, 
	we are trigering the cssInject task, and we've build the cssInject task in such a way that, it wont even begin, 
	untill the styles task has a chance to run and complete, so the compiled css file would have a chanece to be generated. 
	AND only at that point we will pipe it in to browserSync. */

gulp.task('cssInject',['styles'] ,function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'] ,function(){
	browserSync.reload();
});
