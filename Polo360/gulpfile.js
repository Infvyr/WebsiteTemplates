var gulp = require ('gulp');
var sass = require ('gulp-sass');
var sourcemaps = require ('gulp-sourcemaps');
var autoprefixer = require ('gulp-autoprefixer');
var imagemin = require ('gulp-imagemin');
var browserSync = require ('browser-sync').create();

// css task
gulp.task('css', function() {
  //return gulp.src('src/sass/styles.scss') or
  return gulp.src('src/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream())
}); // running task with command in terminal: gulp task name

// task for imagemin
gulp.task('images', function() {
  return gulp.src('src/media/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/media'))
});

// task for copy
gulp.task('copy', function() {
  return gulp.src('src/**/*.+(html|js)')
  .pipe (gulp.dest('dist'))
  .pipe(browserSync.stream())
});

// task for browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
});

// task for html
gulp.task('watch', ['browserSync', 'css'], function() {
  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/**/*.+(html|js)', ['copy']);
});
