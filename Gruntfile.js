module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-blanket');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js','lib/**/*.js','test/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    watch: {
      scripts: {
        files: '<%= jshint.files %>',
        tasks: ['jshint','jscs'],
        options: {
          spawn: false,
        },
      },
    },
    jscs: {
      src: '<%= jshint.files %>',
      options: {
        config: '.jscsrc',
      },
    },
    clean: {
      coverage: {
        src: ['coverage/'],
      },
    },
    copy: {
      coverage: {
        src: ['test/**/*.js'],
        dest: 'coverage/',
      },
    },
    blanket: {
      coverage: {
        src: ['lib/'],
        dest: 'coverage/lib/',
      },
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true,
        },
        src: ['coverage/test/**/*.js'],
      },
      coverage: {
        options: {
          reporter: 'html-cov',
          quiet: true,
          captureFile: 'coverage.html',
        },
        src: ['coverage/test/**/*.js'],
      },
    },
  });

  grunt.registerTask(
    'default',
    ['jshint','jscs','clean', 'blanket', 'copy', 'mochaTest']);
};
