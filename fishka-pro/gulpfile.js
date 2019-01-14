'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    cssbeautify = require('gulp-cssbeautify');


// Move the javascript files into our js folder
gulp.task('build-js', function () {
  return gulp.src(['./js/fullpage.min.js'])
      .pipe(gulp.dest("./js/main.js"));
});

gulp.task('pug', function() {
  return gulp.src('./*.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('./')).pipe(browserSync.stream());
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src(['css/style.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer(['last 15 versions']))
      .pipe(cssbeautify())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream()); //{match: '**/*.css'}
});


function reload(done) {
  browserSync.reload();
  done();
}

// Server + watching scss/js files
gulp.task('default', function () {
  browserSync.init({
    server: {
        baseDir: "./"
    },
    notify: false
  });
  gulp.watch(['./css/*.scss'], gulp.parallel('sass'));
  gulp.watch(['./js/*.js'], gulp.parallel(reload));
  gulp.watch(['./*.pug'], gulp.parallel('pug'));
  gulp.watch(['./*.pug'], gulp.parallel(reload));
});

gulp.task('build', gulp.series('build-js', 'sass'));