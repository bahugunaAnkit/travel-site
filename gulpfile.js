const gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('style',function(done){
	console.log('A css is running.. ha ha ha...');
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