var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  es = require('event-stream'),
  minifyCss = require('gulp-minify-css'),
  del = require('del'),
  order = require('gulp-order'),
  autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', ['clean-css'], function () {

  var sassFiles = gulp.src('www/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))

  var cssFiles = gulp.src([
    'www/css/**/*.css'
  ])
  .pipe(order([
    'www/css/reset.css',
    'www/css/**/*.css'
  ])).pipe(sourcemaps.init())

  es.concat(cssFiles, sassFiles)
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www/stylesheets-dist'))
})

gulp.task('clean-css', function (callback) {
  return del(['www/stylesheets-dist/**/*.*'], callback)
})