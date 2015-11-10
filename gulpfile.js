var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('clean', function() {
    return del('./dist');
});

gulp.task('copy', ['clean'], function() {
    gulp.src(['./returnsCmd.js'])
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', ['clean', 'copy'], function() {
    gulp.src(['./quandlAPI.js', './returnsCalc.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
    return gulp.src(['spec/*Spec.js'])
        .pipe(jasmine());
});

gulp.task('lint', function() {
    return gulp.src(['*.js', 'spec/*Spec.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watchAll', function() {
    gulp.watch(['*.js', 'spec/*Spec.js'], ['lint', 'test']);
});

gulp.task('default', ['lint', 'test', 'uglify']);
