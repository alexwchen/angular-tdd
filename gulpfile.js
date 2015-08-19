var gulp = require('gulp');
var browserSync = require('browser-sync');
var karma = require('karma').server;

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

gulp.task('test-browser', function(){
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters:['mocha']
  })
})


gulp.task('serve-test',function(){
  // server
  browserSync.init({
    notify:false,
    port:8081,
    server:{
      baseDir:['test','app'],
      routes:{
        '/bower_components':'bower_components'
      }
    }
  })

  // relaod after file change
  glup.watch(['app/**/*.*'])
    .on('change',browserSync.reaload);
});
