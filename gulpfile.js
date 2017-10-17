const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', () => {
    gulp.src([
        '*.js',
        './**/*.js',
        '!node_modules/**'
    ])
        .pipe(eslint( { fix: true }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});