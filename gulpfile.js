var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	jade = require('gulp-jade'),
	nodemon = require('nodemon');

gulp.task('server', function(){
	connect.server({
		root: [__dirname],
		port: 8080,
		livereload: true
	});
});

gulp.task('jade', function() {
    return gulp.src('views/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest(__dirname)); // tell gulp our output folder
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  })
})

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
	gulp.src('views/index.jade')
		.pipe(connect.reload());
})

gulp.task('watch', function(){
	gulp.watch('public/javascripts/*.js', ['js']);
	gulp.watch('public/stylesheets/sass/**/*.scss', ['styles']);
	gulp.watch('views/index.jade', ['index']);
});


gulp.task('default',['server', 'start', 'watch', 'jade'], function(){

});