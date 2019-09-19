var gulp = require('gulp'),
  // less = require('gulp-less'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer');

var cssPathArr = ['src/css/*.css', 'src/scss/*.scss'];

function css() {
  gulp.src(cssPathArr)
    // .pipe(less())
    .pipe(sass())
    .pipe(concat('ezui.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'));

  gulp.src(cssPathArr)
    // .pipe(less())
    .pipe(sass())
    .pipe(concat('ezui.css'))
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
}

function js() { }

/* 编译css */
gulp.task('css', function () {
  css();
});

gulp.task('build', function () {
  css();
});

function watch() {
  css();

  const watcher = gulp.watch(cssPathArr);

  watcher.on('change', function (path, stats) {
    console.log(`File ${path} was changed`);
    css();
  });

  watcher.on('add', function (path, stats) {
    css();
    console.log(`File ${path} was added`);
  });

  watcher.on('unlink', function (path, stats) {
    console.log(`File ${path} was removed`);
    css();
  });
}

gulp.task('watch', function () {
  watch();
});

gulp.task('default', function () {
  watch();
});