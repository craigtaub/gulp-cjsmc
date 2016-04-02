# gulp-cjsmc

A gulp-plugin for CJSMC

# Why

CJSMC package details on https://www.npmjs.com/package/cjsmc

# Usage

Below builds module into /client/templates.js, can easily be changed to anywhere else.

    var del = require('del');
    var rename = require('gulp-rename');
    var cjsmc = require('gulp-cjsmc');

    gulp.task('clean', function() {
        return del(['client/templates.js']);
    });

    gulp.task('templates', ['clean'], function (cb) {
        gutil.log('Compiling templatates');
        return gulp.src('.')
            .pipe(cjsmc())
            .pipe(rename('templates.js'))
            .pipe(gulp.dest('client'));
    });
