const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('style',function(done){
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
	done();
});

gulp.task('watch', function(done){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	watch('./app/index.html', function(){
		browserSync.reload();										//ever
	});
	watch('./app/assets/**/*.css', gulp.series('cssInject'));
	done();
});

function cssInject(){
	gulp.src('./app/temp/styles/style.css')
	.pipe(browserSync.stream());
}

gulp.task('cssInject', gulp.series('style', cssInject));