'use strict';

module.exports = function( grunt ) {

    grunt.loadNpmTasks( 'grunt-contrib-sass' );

    grunt.registerTask( 'default', [ 'sass' ] );

    grunt.initConfig( {
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'a.css': 'a.scss', // 'destination': 'source'
                }
            }
        }
    } );

};
