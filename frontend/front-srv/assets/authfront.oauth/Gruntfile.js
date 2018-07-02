module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                "sourceMap": true,
                "presets": ["env"],
                "plugins": ["transform-class", "transform-class-properties", "transform-object-rest-spread"]
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "res/js",
                    "src": ["**/*.js"],
                    "dest": "res/js-compiled/",
                    "ext": "-compiled.js"
                }]
            }
        },
        uglify: {
            all_src : {
                options : {
                  sourceMap : true,
                  sourceMapName : 'src/build/sourceMap.map'
                },
                src : 'res/js-compiled/**/*-compiled.js',
                dest : 'res/build/OAuth.js'
            }
        },
        watch: {
            js: {
                files: [
                    "res/**/*"
                ],
                tasks: ['babel'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default", ["babel", "uglify"]);

};
