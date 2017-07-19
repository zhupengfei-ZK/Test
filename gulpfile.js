/**
 * Created by Administrator on 2017/7/12.
 */
// 引入 gulp及组件
//插件的引入方法 和任务建立方法参照gulp的官网插件
var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'), //压缩css
  jshint = require('gulp-jshint'), //js代码校验
  uglify = require('gulp-uglify'), //压缩JS
  imagemin = require('gulp-imagemin'), //压缩图片
  rename = require('gulp-rename'), //合并js文件
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del');
htmlmin = require('gulp-htmlmin');//压缩html代码
//建立任务：  Styles
gulp.task('styles', function() {
  return gulp.src('dist/static/css/*.css')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('gulpsrc/styles'))
    .pipe(notify({
      message: 'Styles task complete'
    }));
});
//建立任务：  htmlmin
gulp.task('htmlmin', function() {
  //  src/**/*.html  这个代表的是src下边的html文件以及他的子文件下的所有的html文件
  return gulp.src('dist/*.html')
    .pipe(rename({
      suffix: 'min'
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('gulpsrc'))
    .pipe(notify({
      message: ' task complete'
    }));
});
// Scripts
gulp.task('scripts', function() {
  return gulp.src('dist/static/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('gulpsrc/scripts'))
    .pipe(notify({
      message: 'Scripts task complete'
    }));
});
// Images
gulp.task('images', function() {
  return gulp.src('dist/static/images/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
      progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    })))
    .pipe(gulp.dest('gulpsrc/images'))
    .pipe(notify({
      message: 'Images task complete'
    }));
});
// Clean 任务执行前，先清除之前生成的文件
gulp.task('clean', function(cb) {
  del(['gulpsrc/assets/css', 'gulpsrc/assets/js', 'gulpsrc/assets/img'], cb)
});
// Default task 设置默认任务
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images');
});
// 监听文件: Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('dist/static/css/**/*.css', ['styles']);
  // Watch .js files
  gulp.watch('dist/static/js/**/*.js', ['scripts']);
  // Watch image files
  gulp.watch('dist/static/images/**/*', ['images']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['gulpsrc/**']).on('change', livereload.changed);
});