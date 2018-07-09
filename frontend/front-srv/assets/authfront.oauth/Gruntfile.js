module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                "sourceMap": true,
                "presets": ["env"],
                "plugins": ["transform-react-jsx", "transform-class", "transform-class-properties", "transform-object-rest-spread"]
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "res/js",
                    "src": ["**/*.js"],
                    "dest": "res/js-compiled/",
                    "ext": ".js"
                }]
            }
        },
        browserify: {
            all_src: {
                src: ['res/js-compiled/**/*.js'],
                dest: 'res/js-browserified/OAuth.browserified.js'
            }
        },
        uglify: {
            all_src : {
                options : {
                  sourceMap : true,
                  sourceMapName : 'res/build/sourceMap.map'
                },
                src : 'res/js-browserified/OAuth.browserified.js',
                dest : 'res/build/OAuth.js'
            }
        },
        watch: {
            js: {
                files: [
                    "res/**/*"
                ],
                tasks: ['babel', "browserify", "uglify"],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default", ["babel", "browserify", "uglify"]);

};
