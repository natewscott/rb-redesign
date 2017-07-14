'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },

      compass: {
      files: ['scss/{,**/}*.scss'],
      tasks: ['compass:dev']
    }, //compass

    includes: {
      files: ['includes/**/*', '*.html'],
      tasks: ['includes']
    },//Includes

    html: {
      files: ['*.html']
    }, //html

    livereload: {
      options: {
       livereload: 1337
     },
     files: [
     'build/css/main.css',
     'build/js/*.js',
     'build/images/{,**/}*.{png,jpg,jpeg,gif,webp}',
     'build/*.html'
   ]
 },
  }, //watch

  concat: {
   options: {
    // define a string to put between each file in the concatenated output
    separator: ';'
  },
  dist: {
    // the files to concatenate
    src: ['js/vendor/*.js',
    'js/functions.js'
    ],
    // the location of the resulting JS file
    dest: 'build/js/main.js'
  }
},//Conacat

uglify: {
  build: {
    src: ['js/vendor/*.js',
    'js/functions.js'
    ],
    dest: 'build/js/main.js'
  }
  },//Uglify

  connect: {
    server: {
      options: {
        livereload: 1337,
        port: 9001,
        base: 'build/',
        open: {
          target: 'http://localhost:9001/',
        }//Target
      }//Options
    }//Server
  },//Connect

  includes: {
    files: {
      src: ['*.html'],
      dest: 'build',
      cwd: '.',
      options: {
        includePath: 'includes'
      }
    }
  },//Includes

  compass: {
    options: {
     sassDir: 'scss',
     cssDir: 'build/css',
     bundleExec: true,
        },//options
        dev: {
          options: {
            environment: 'development',
            outputStyle: 'expanded',
          }
        },//Dev
        dist: {
          options: {
            environment: 'production',
            outputStyle: 'compact',
          }
        },//Dist
      },//compass

    imagemin: {
      dynamic: {
      files: [{
        expand: true,
        cwd: 'img/',
        src: ['**/*.{png,jpg,jpeg,gif,webp}'],
        dest: 'build/img'
      }]
     }
    },//Imagemin

    bower: {
    install: {
      options: {
        targetDir: './libs',
        cleanBowerDir: true,
      }
    }
  },//Bower

    shell: {
      bundler: {
        command: 'bundle --path lib'
      }
},//Bundler

  });//initConfig

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-includes');
grunt.loadNpmTasks('grunt-bower-task');
grunt.loadNpmTasks('grunt-shell');




grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'shell:bundler', 'bower', 'compass:dev', 'includes', 'connect', 'watch']);
};//exports