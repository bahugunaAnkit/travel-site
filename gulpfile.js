const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('style',function(done){
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([nested, cssvars, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
	done();
});

gulp.task("test", function(munn){
	console.log('an html task');
	munn(); 
});

gulp.task('watch', function(done){
	
	watch('./app/index.html', function(){
		gulp.series('test') (function(cb){	//not
			if(cb){							//related
				console.log('error');			//to 
			}									//the
			else{								//project
				console.log('congratulations!');//what-
			}									//so-
		})										//ever
	});
	watch('./app/assets/**/*.css', gulp.series('style'));
	done();
});