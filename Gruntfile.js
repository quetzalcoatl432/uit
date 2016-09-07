'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jst: {
            compile: {
                options: {
                    namespace: 'Uit.Templates',
                    processName: function (filePath) {
                        filePath = filePath.replace('source/views/', '');
                        var pieces = filePath.split('/').join('__');
                        var nameFile = pieces.split('.')[0];
                        var sections = nameFile.split('_');
                        var fragments = sections[0];
                        for (var i = 0; i < sections.length; i++) {
                            if (i > 0) {
                                var fragment = sections[i];
                                fragment = fragment.charAt(0).toUpperCase() + fragment.substring(1);
                                fragments += fragment;
                            }
                        }
                        console.info('Template : ' + fragments);
                        return fragments;
                    },
                    templateSettings: {
                        interpolate: /\{\{(.+?)\}\}/g,
                        variable   : 'data'
                    }
                },
                files: {
                    'source/templates.js': ['source/views/**/*.ejs']
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                browser: true,
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'bower_components/uit.js/*.js',
                'source/views/**/*.js',
                'source/routes/**/*.js',
                'source/models/**/*.js',
                'source/collections/**/*.js',
                'source/helpers/**/*.js',
                'source/application.js'
            ]
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'source/styles',
                    src: ['main.scss'], //['**/*.scss'],
                    dest: 'source/styles',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'source/styles',
                    src: ['styles_letter.scss', 'common.scss'], //['**/*.scss'],
                    dest: 'source/styles',
                    ext: '.css'
                }]
            },
            prod: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'source/styles',
                    src: ['main.scss'], //['**/*.scss'],
                    dest: 'source/prod',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'source/styles',
                    src: ['styles_letter.scss', 'common.scss'], //['**/*.scss'],
                    dest: 'source/prod',
                    ext: '.css'
                }]
            }
        },
        watch: {
            configFiles: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            js: {
                files: [
                    'source/views/**/*.js',
                    'source/views/**/**/*.js',
                    'source/routes/**/*.js',
                    'source/models/**/*.js',
                    'source/collections/**/*.js',
                    'source/helpers/**/*.js'

                ],
                tasks: ['jshint']
            },
            css: {
                files: 'source/styles/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
            src: {
                files: ['source/views/**/*.ejs'],
                tasks: ['jst']
            }
        },
        uglify: {
            bowers: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/underscore/underscore-min.js',
                    'bower_components/backbone/backbone.js',
                    'bower_components/rivets/dist/rivets.bundled.min.js'
                ],
                dest: 'source/prod/libs.js'
            },
            js: {
                src: [
                    'source/application.js',
                    'source/helpers/**/*.js',
                    'source/templates.js',
                    'source/models/**/*.js',
                    'source/collections/**/*.js',
                    'source/views/**/*.js',
                    'source/routes/**/*.js',
                ],
                dest: 'source/prod/app.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'source/prod/libs.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.min.css'
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['sass:dist', 'jshint', 'jst', 'watch']);
    // grunt.registerTask('copy', ['copy:prod']);
    grunt.registerTask('prod', ['uglify', 'cssmin', 'jst', 'sass:prod']);
};