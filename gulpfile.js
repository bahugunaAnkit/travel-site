var gulp = require("gulp"),
watch = require("gulp-watch");

gulp.task("default", function(munn){
	console.log("first gulp task");
	munn();
});

gulp.task('html', function(munn){
	console.log("an html task");
	munn(); 
});

gulp.task('func', function(error){
			if(error){
				console.log("A BIG ERROR!!!");
			}
			else{
				console.log("CONGRATULATIONS!!");
			}
		});
		
gulp.task('watch', function(munn){
	watch('./app/index.html', function(){
		gulp.series('html','func')();
	});
	munn();
});