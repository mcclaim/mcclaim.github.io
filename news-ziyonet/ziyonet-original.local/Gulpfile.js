'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssbeautify = require('gulp-cssbeautify'),
	autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cssbeautify({autosemicolon: true}))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});