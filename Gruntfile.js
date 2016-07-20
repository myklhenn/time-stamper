module.exports = function(grunt) {

  // project configuration
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true,
          // open: {
          //   target: 'http://localhost:9001',
          //   appName: 'open'
          // }
          // (specify root directory option here if needed)
        }
      }
    },
    link_html: {
      build: {
        jsFiles: [
          '**/angular.min.js',
          '**/angular-route.min.js',
          // '**/angular-animate.min.js',
          '**/app.js'
        ],
        cssFiles: [
          '**/assets/css/style.css'
        ],
        targetHtml: ['index.html']
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-link-html');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // add tasks
  grunt.registerTask('default', ['connect']);
  grunt.registerTask('link', ['link_html']);

};
