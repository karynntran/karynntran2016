var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect')
	livereload = require('gulp-livereload');

gulp.task('server', function(){
	connect.server({
		root: 'app',
		port: 3000,
		livereload: true
	});
});

gulp.task('styles', function(){
	gulp.src('public/stylesheets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/css/'))
        .pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src('javascripts/*.js')
		.pipe(connect.reload());
})

gulp.task('index', function(){
	gulp.src('index.html')
		.pipe(connect.reload());
})

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['js']);
	gulp.watch('public/stylesheets/sass/**/*.scss', ['styles']);
	gulp.watch('index.html', ['index']);
});


gulp.task('default',['server', 'watch'], function(){

});