module.exports = function (grunt)
{
    'use strict';

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['app/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
