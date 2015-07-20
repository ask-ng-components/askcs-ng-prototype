'use strict';

var path = require('path');
var gulp = require('gulp');

var ngmod = 'askcs.component.prototype';

var $ = require('gulp-load-plugins')();

gulp.task('build', function () {
  var htmlFilter = $.filter('**/*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src([
    './src/**'
  ])
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache(ngmod + '.tpl.js',{
      module: ngmod
    }))
    .pipe(htmlFilter.restore())
    .pipe(jsFilter)
    .pipe($.angularFilesort())
    .pipe($.concat(ngmod + '.bundle.js'))
    .pipe($.iife())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.autoprefixer({
      browsers: ['ie >= 9', 'last 2 versions']
    }))
    .pipe(cssFilter.restore())
    .pipe(gulp.dest('./dist/'));
});


gulp.task('default', ['build']);
