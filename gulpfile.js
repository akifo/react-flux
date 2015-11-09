var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var rimraf = require('rimraf');
var compass     = require('gulp-compass');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');

// distフォルダを全て削除
gulp.task('cleanBuild', function (cb) {
  rimraf('./dist/', cb);
});

// htmlファイルのコピー
var HTML_FILE   = './src/**/*.html';
gulp.task('html', function () {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./dist/'));
});

// scssをcssへコンパイル
var SCSS_FILE   = './src/scss/**/*.scss';
gulp.task('compass',function(){
    gulp.src([SCSS_FILE])
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(compass({
            project: __dirname,
            config_file : 'config.rb',
            comments : false,
            css : './dist/css',
            sass: './src/scss'
        }))
        .on('error', function(error) {
          console.log(error);
          // this.emit('end');
        })
        .pipe(minifyCSS());
});

// jsxのコンパイル
gulp.task('javascript', function () {
  return gulp.src('')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(''));
});


gulp.task('build', ['cleanBuild'], function(){
  gulp.start(['html','compass','javascript']);
});

gulp.task('watch', function () {

  // ファイルを監視 ./src/**/*.html
  gulp.watch(HTML_FILE, ['html']);

  // ファイルを監視 src/scss/**/*.scss
  gulp.watch(SCSS_FILE, ['compass']);

  // ファイルを監視 src/js/**/*.jsx  src/js/**/*.js
  gulp.watch(['./src/js/**/**.jsx','./src/js/**/**.js'], ['javascript']);

});

gulp.task('default', ['build', 'watch']);
