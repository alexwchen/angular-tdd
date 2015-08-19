module.exports = function(config){
  config.set({
    browsers:['PhantomJS'],
    frameworks:['mocha'],
    files:[ // file that Phamton needs to load
      'bower_components/angular/angular.js',
      'bower_components/chai/chai.js',
      'app/**/*.js',
      'test/*.js'
    ],
  })
}
