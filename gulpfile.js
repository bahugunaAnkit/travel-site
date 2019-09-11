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

gulp.task("test", function(munn){
	browserSync.reload();
	console.log('an html task');
	munn(); 
});

gulp.task('watch', function(done){
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
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
	watch('./app/assets/**/*.css', function(){
		gulp.series('style') (function(cb){	//not
			if(cb){							//related
				console.log('error');			//to 
			}									//the
			else{								//project
				console.log('congratulations!');//what-
			}									//so-
		})										//ever
	});
	done();
});