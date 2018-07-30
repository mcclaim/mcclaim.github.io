'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	gulpPugBeautify = require('gulp-pug-beautify'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('pug', function buildHTML() {
  return gulp.src('./*.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest('./')).pipe(browserSync.stream());
});
 
gulp.task('sass', function () {
  gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('./css')).pipe(browserSync.stream());
});

gulp.task('serve', function () {
    gulp.watch('./css/**/*.scss', ['sass']);
    gulp.watch("./*.pug", ['pug']);
    gulp.watch("./*.pug").on('change', browserSync.reload);
});

gulp.task('default', ['serve', 'browser-sync']);