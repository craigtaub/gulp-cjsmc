# gulp-cjsmc

A gulp-plugin for CJSMC

# Why

CJSMC package details on https://www.npmjs.com/package/cjsmc

# Usage

    var cjsmc = require('gulp-cjsmc');
    var rename = require('gulp-rename');

    return gulp.src('.')
      .pipe(cjsmc())
      .pipe(gulp.dest('client/templates'));
