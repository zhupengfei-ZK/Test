/**
 * Created by Administrator on 2017/7/12.
 */
// ���� gulp�����
//��������뷽�� ����������������gulp�Ĺ������
var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'), //ѹ��css
  jshint = require('gulp-jshint'), //js����У��
  uglify = require('gulp-uglify'), //ѹ��JS
  imagemin = require('gulp-imagemin'), //ѹ��ͼƬ
  rename = require('gulp-rename'), //�ϲ�js�ļ�
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del');
htmlmin = require('gulp-htmlmin');//ѹ��html����
//��������  Styles
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
//��������  htmlmin
gulp.task('htmlmin', function() {
  //  src/**/*.html  ����������src�±ߵ�html�ļ��Լ��������ļ��µ����е�html�ļ�
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
      optimizationLevel: 5, //���ͣ�Number  Ĭ�ϣ�3  ȡֵ��Χ��0-7���Ż��ȼ���
      progressive: true, //���ͣ�Boolean Ĭ�ϣ�false ����ѹ��jpgͼƬ
      interlaced: true, //���ͣ�Boolean Ĭ�ϣ�false ����ɨ��gif������Ⱦ
      multipass: true //���ͣ�Boolean Ĭ�ϣ�false ����Ż�svgֱ����ȫ�Ż�
    })))
    .pipe(gulp.dest('gulpsrc/images'))
    .pipe(notify({
      message: 'Images task complete'
    }));
});
// Clean ����ִ��ǰ�������֮ǰ���ɵ��ļ�
gulp.task('clean', function(cb) {
  del(['gulpsrc/assets/css', 'gulpsrc/assets/js', 'gulpsrc/assets/img'], cb)
});
// Default task ����Ĭ������
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images');
});
// �����ļ�: Watch
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