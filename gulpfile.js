var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	jade = require('gulp-jade'),
	exec = require('child_process').exec,
	tinylr = require('tiny-lr'),
	server = tinylr(),
	jshint = require('gulp-jshint'),
	nodemon = require('nodemon'),
	autoprefixer = require('gulp-autoprefixer');;

gulp.task('start', function () {
  nodemon({
    script: 'app.js'
  })
})

gulp.task('styles', function(){
	gulp.src('public/stylesheets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(gulp.dest('public/stylesheets/css/'))
        .pipe( livereload( server ));
});

gulp.task('html', function() {
    return gulp.src([
        'views/index.html'
    ])
    .pipe(livereload());
});

gulp.task('js', function(){
	gulp.src('public/javascripts/*.js')
		.pipe( livereload( server ));
})

gulp.task('jshint', function() {
 	gulp.src('public/javascripts/*.js')
	   .pipe(jshint())
	   .pipe(jshint.reporter('default'));
});

gulp.task('jade', function(){
	gulp.src('views/*.jade')
		.pipe( livereload( server ));
})

gulp.task('watch', function(){
    server.listen(35729, function (err) {
	    if (err) {
	      return console.log(err);
	    }

    gulp.watch('public/javascripts/*.js', ['js']);
	gulp.watch('views/*.jade', ['jade', 'styles']);
	gulp.watch('views/*.html', ['html', 'styles']);
	gulp.watch('public/stylesheets/sass/**/*.scss', ['styles']);

	});
});


gulp.task('default',['start', 'styles', 'watch'], function(){

});