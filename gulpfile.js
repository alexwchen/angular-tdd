var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve',function(){
  // server
  browserSync.init({
    notify:false,
    port:8080,
    server:{
      baseDir:['app'],
      routes:{
        '/bower_components':'bower_components'
      }
    }
  })

  // relaod after file change
  glup.watch(['app/**/*.*'])
    .on('change',browserSync.reaload);
});
