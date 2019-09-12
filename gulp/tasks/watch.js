const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(done){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	watch('./app/index.html', function(){
		browserSync.reload();
	});
	watch('./app/assets/**/*.css', gulp.series('cssInject'));
	done();
});

function cssInject(){
	return gulp.src('./app/temp/styles/style.css')
		.pipe(browserSync.stream());
}

gulp.task('cssInject', gulp.series('style', cssInject));