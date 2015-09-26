module.exports = function (grunt) {

	grunt.initConfig({
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
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

	// register defaut task
	grunt.registerTask('default', []);
};