var gulp = require('gulp');

// gulp plugins and utils
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');

gulp.task('css', function () {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano()
    ];
    
    return gulp.src('./css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(concat('theme.min.css'))
        .pipe(gulp.dest('./assets'));
});

gulp.task('scripts_all', function() {
    return gulp.src(['js/*.js'])
        .pipe(uglify())
        .pipe(concat('theme_all.min.js'))
        .pipe(gulp.dest('assets/'));
});

gulp.task('scripts', function() {
    return gulp.src(['js/site.js'])
        .pipe(uglify())
        .pipe(concat('theme.min.js'))
        .pipe(gulp.dest('assets/'));
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.scss', ['css']);
    gulp.watch('js/*.js', ['scripts_all', 'scripts']);
});

gulp.task('build', ['css', 'scripts_all', 'scripts'], function () {
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
