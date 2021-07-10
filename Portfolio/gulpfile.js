var gulp        	= require('gulp'),
	sass            = require('gulp-sass'),
	browserSync     = require('browser-sync')
	autoprefixer    = require('gulp-autoprefixer'),
	sourcemaps      = require('gulp-sourcemaps');

// css task
gulp.task('css', function() {
  //return gulp.src('src/sass/styles.scss') or
  return gulp.src('src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
          outputStyle: 'expanded'
      }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream())
}); // running task with command in terminal: gulp task name

gulp.task('copy', function() {
  return gulp.src('src/**/*.+(html|js|jpg|jpeg|png|ico)')
  .pipe (gulp.dest('dist'))
  .pipe(browserSync.stream())
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
});

// task for html
gulp.task('watch', ['browserSync', 'css'], function() {
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch('src/**/*.+(html|js)', ['copy']);
});