'use strict'

// Load plugins
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass') // SCSS

// paths
const srcPath = './src/assets/'
const destPath = './src/'

// CSS task
function css() {
    return (
        gulp
            .src(srcPath + 'scss/**/*.scss') // SCSS
            .pipe(plumber())
            .pipe(sass({ outputStyle: 'expanded' })) // SCSS
            // .pipe(gulp.dest(destPath + 'css/'))
            // .pipe(rename({ suffix: '.min' }))
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(gulp.dest(destPath))
    )
}

// Watch files
function watchFiles() {
    gulp.watch(srcPath + 'scss/**/*', css) // SCSS
}

// define complex tasks
const build = gulp.series(gulp.parallel(css))
const watch = gulp.parallel(watchFiles)

// export tasks
exports.css = css
exports.build = build
exports.watch = watch
exports.default = build
