var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect')
	livereload = require('gulp-livereload');

gulp.task('server', function(){
	connect.server({
		livereload: true
	});
});

gulp.task('styles', function(){
	gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
});


gulp.task('default',['server', 'watch'], function(){

});