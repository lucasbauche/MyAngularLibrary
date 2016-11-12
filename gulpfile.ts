
var gulp = require('gulp'),
  sass    = require('gulp-sass'),
  runSequence = require('run-sequence'),
  minifyCss   = require('gulp-minify-css'),
  sourcemaps = require('gulp-sourcemaps'),
  tsc  = require('gulp-typescript'),
  embedTemplates  = require('gulp-inline-ng2-template'),
  exec = require('child_process').exec;

//----
//build steps
gulp.task('build', function (done) {
  
  runSequence(
    'clean',
    'compile-sass',
    'compile-typings'
  );

});

//----
//clearing the output dir
gulp.task('clean', function (done) {
  exec('rm -rf lib', function (err, stdOut, stdErr) {
    if (err){
      done(err);
    } else {
      done();
    }
  });
});

//----
//typescript compilation including sourcemaps and template embedding
gulp.task('compile-typings', function() {

    //loading typings file
    var tsProject = tsc.createProject('src/tsconfig.json');

    return  tsProject.src('src/**/*.ts')
        .pipe(embedTemplates({ 
            base:'/src',
            useRelativePaths: true 
        }))
        .pipe(tsProject())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('lib'));
});

//----
//Sass compilation and minifiction
gulp.task('compile-sass', function () {
  gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError)) // this will prevent our future watch-task from crashing on sass-errors
    .pipe(minifyCss({compatibility: 'ie8'})) // see the gulp-sass doc for more information on compatibilitymodes
        .pipe(gulp.dest(function(file) {
            return file.base; // because of Angular 2's encapsulation, it's natural to save the css where the scss-file was
    }));
});

