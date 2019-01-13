"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}


// Clean assets
// function clean() {
//   return del(["./_site/assets/"]);
// }

// Optimize Images
function images() {
  return gulp
    .src("./src/media/**/*")
    .pipe(newer("./src/media/img"))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest("./dist/assets/media"));
}

// CSS task
function css() {
  return (
    gulp
    .src("./src/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/assets/css/"))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/assets/css/"))
    .pipe(browsersync.stream())
  );
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./src/js/**/*", "./gulpfile.js"])
    .pipe(plumber());
    // .pipe(eslint())
    // .pipe(eslint.format())
    // .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src(["./src/js/**/*"])
      .pipe(plumber())
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest("./dist/assets/js/"))
      .pipe(browsersync.stream())
  );
}

// Watch files
function watchFiles() {
  gulp.watch("./src/sass/**/*", css);
  gulp.watch("./src/js/**/*", gulp.series(scriptsLint, scripts));
  // gulp.watch(
  //   [
  //     "./_includes/**/*",
  //     "./_layouts/**/*",
  //     "./_pages/**/*",
  //     "./_posts/**/*",
  //     "./_projects/**/*"
  //   ],
    // gulp.series(jekyll, browserSyncReload)
  // );
  gulp.watch("./src/media/**/*", images);
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(gulp.parallel(css, images, js));
const watch = gulp.parallel(watchFiles, browserSync);
// const watch = gulp.parallel(watchFiles);

// export tasks
exports.images = images;
exports.css = css;
exports.js = js;
// exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
