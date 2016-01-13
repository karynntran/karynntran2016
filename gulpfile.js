var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	jade = require('gulp-jade'),
	exec = require('child_process').exec,
	tinylr = require('tiny-lr'),
	server = tinylr(),
	jshint = require('gulp-jshint')
	nodemon = require('nodemon');

// gulp.task('server', function (cb) {
//   exec('npm start', function (err, stdout, stderr) {
//     console.log(stdout);
//     console.log(stderr);
//     cb(err);
//   })
// });

// gulp.task('server', function(){
// 	connect.server({
// 		root: [__dirname],
// 		port: 8080,
// 		base: 'http://localhost',
// 		livereload: true
// 	});
// });

// gulp.task('jade', function() {
//     return gulp.src('views/index.jade')
//         .pipe(jade()) // pip to jade plugin
//         .pipe(gulp.dest(__dirname)); // tell gulp our output folder
// });

gulp.task('start', function () {
  nodemon({
    script: 'app.js'
  })
})

gulp.task('styles', function(){
	gulp.src('public/stylesheets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/css/'))
        .pipe( livereload( server ));
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
	gulp.watch('public/stylesheets/sass/**/*.scss', ['styles']);
	gulp.watch('views/*.jade', ['jade']);

	});
});


gulp.task('default',['start', 'watch'], function(){

});