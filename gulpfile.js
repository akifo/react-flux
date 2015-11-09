var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var rimraf = require('rimraf');

gulp.task('cleanBuild', function (cb) {
  rimraf('./build/', cb);
});

gulp.task('copyIndex', ['cleanBuild'], function () {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['copyIndex'], function (cb) {
  return gulp.src('')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(''));
});

gulp.task('watch', function () {

  gulp.watch(['./src/js/**/**.jsx','./src/index.html'], function () {
    gulp.start(['build']);
  });

});

gulp.task('default', ['build', 'watch']);
