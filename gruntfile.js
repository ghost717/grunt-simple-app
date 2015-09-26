module.exports = function (grunt) {

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // https://github.com/gruntjs/grunt-contrib-jshint
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    ko: true
                },
                // our nice reporter
                reporter: require('jshint-stylish')
            },
            // what files should be included
            all: [
                'gruntfile.js',
                'src/js/*.js',
                'test/**/*.js'
            ]
        },
        // https://github.com/gruntjs/grunt-contrib-less
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
            //  "src/css/screen.css": "src/less/screen.less" // destination file and source file
              "src/css/*.css": "src/less/*.less" // destination file and source file
            }
          }
        },
        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            all: {
                files: '<%= jshint.all %>',
                tasks: [ 'jshint:all' ],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },
            configFiles: {
                files: [ 'gruntfile.js' ],
                options: {
                    reload: true
                }
            },
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                  nospawn: true
                }
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

	// register defaut task
	 grunt.registerTask('default', ['less', 'watch']);
};