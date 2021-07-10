var gulp           = require('gulp'),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		autoprefixer   = require('gulp-autoprefixer'),
    minifyCSS      = require('gulp-clean-css'),
    imagemin       = require ('gulp-imagemin');
    jquery         = require('gulp-jquery')

// task for imagemin
gulp.task('images', function() {
  return gulp.src('src/media/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/media'))
});

// task for copy jQuery
gulp.task('jquery', function () {
  return jquery.src({
    release: 2, //jQuery 2
    flags: ['-deprecated'] //, '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
  })
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.reload({stream: true}));
});

// scss task
gulp.task('scss', function() {
  //return gulp.src('src/sass/styles.scss') or
  return gulp.src('src/scss/**/*.scss')
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer(['last 5 versions']))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({stream: true}));
});

// task for minifyCSS
gulp.task('minify-css', ['scss'], function() {
  return gulp.src('dist/css/*.css')
    .pipe(minifyCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// task for copy
gulp.task('copy', function() {
  return gulp.src('src/**/*.+(html|js)')
  .pipe (gulp.dest('dist'))
  .pipe(browserSync.stream())
});

// task for browserSync
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		}
	})
});

// delete dist directory
gulp.task('clean', function() {
	return del.sync('src');
});

gulp.task('watch', ['jquery', 'scss', 'copy', 'browser-sync'], function() {
	gulp.watch('src/scss/**/*.scss', ['scss']); // css
	gulp.watch('src/**/*.+(html|js)', ['copy']);
	gulp.watch('src/*.html', browserSync.reload); // html
});

// final task
gulp.task('default', ['watch']);
