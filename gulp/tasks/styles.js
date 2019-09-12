const gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('style', (done)=>{
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
	.on('error', function(errorMsg){
		console.log(errorMsg.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
	done();
});